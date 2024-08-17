"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <section className="pt-32 pb-5">
      <div className="container mx-auto px-8 rounded-lg py-5 bg-[#2c2c39] border-2 border-[rgb(77,76,90)]">
        {" "}
        {/* Centrer dans le conteneur */}
        <nav className="flex  text-white font-semibold text-base">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center hover:text-indigo-500">
              <Link href="/">Home</Link>
            </li>
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const href = `/${pathnames.slice(0, index + 1).join("/")}`;

              return (
                <li key={index} className="inline-flex items-center">
                  <span className="pr-3">/</span>
                  {isLast ? (
                    <span className="text-white font-semibold text-base capitalize">
                      {value}
                    </span>
                  ) : (
                    <Link href={href}>{value}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
