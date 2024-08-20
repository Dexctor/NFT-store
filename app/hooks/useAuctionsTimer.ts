"use client"
import { useState, useEffect, useRef } from "react";

export const useAuctionTimer = (picks: any[]) => {
  const [timeLeft, setTimeLeft] = useState<Record<string, string>>({});
  const endTimesRef = useRef<Record<string, number>>({});

  useEffect(() => {
    picks.forEach((pick) => {
      if (!endTimesRef.current[pick.id]) {
        const randomHours = Math.floor(Math.random() * (48 - 24 + 1)) + 24;
        endTimesRef.current[pick.id] = Date.now() + randomHours * 60 * 60 * 1000;
      }
    });
  }, [picks]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const newTimeLeft: Record<string, string> = {};

      picks.forEach((pick) => {
        const endTime = endTimesRef.current[pick.id];
        if (!endTime) return;

        const difference = endTime - now;

        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          newTimeLeft[pick.id] = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          newTimeLeft[pick.id] = "Terminé";
        }
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [picks]);

  return timeLeft;
};