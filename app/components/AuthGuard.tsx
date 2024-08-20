import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store/store';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!isAuthenticated) {
    router.push('/signin');
    return null;
  }

  return <>{children}</>;
}