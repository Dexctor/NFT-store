import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/authSlice';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      if (session?.user) {
        dispatch(setUser(session.user));
      } else if (pathname !== '/signIn' && pathname !== '/signUp') {
        router.push('/signIn');
      }
    }
  }, [session, loading, router, pathname, dispatch]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!session?.user && pathname !== '/signIn' && pathname !== '/signUp') {
    return null;
  }

  return <>{children}</>;
}