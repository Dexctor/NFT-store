import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { RootState, AppDispatch } from '@/store/store';
import { checkAuth } from '@/store/authSlice';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      dispatch(checkAuth());
    }
  }, [dispatch, loading]);

  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== '/signIn' && pathname !== '/signUp') {
      router.push('/signin');
    }
  }, [isAuthenticated, loading, router, pathname]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!isAuthenticated && pathname !== '/signIn' && pathname !== '/signUp') {
    return null;
  }

  return <>{children}</>;
}