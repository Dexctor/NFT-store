import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/app/utils/auth';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Liste des chemins publics
  const publicPaths = ['/', '/explore', '/support', '/signIn', '/signUp'];
  
  // Autoriser l'accès à /explore/[id]
  if (pathname.startsWith('/explore/')) {
    return NextResponse.next();
  }

  // Autoriser l'accès aux chemins publics
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Pour les chemins protégés (comme /create-item)
  if (!token && !publicPaths.includes(pathname)) {
    // Rediriger vers la page de connexion
    return NextResponse.redirect(new URL('/signIn', request.url));
  }

  // Si un token est présent, laisser passer la requête
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images/|logo.png|hero-image.svg).*)',
  ],
};