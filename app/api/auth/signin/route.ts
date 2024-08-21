import { NextResponse } from 'next/server';
import { comparePasswords, generateToken } from '@/app/utils/auth';
import { getUserByEmail } from '@/app/services/userService';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
    }

    const token = generateToken(user._id.toString());
    const response = NextResponse.json({ 
      user: { id: user._id.toString(), email: user.email },
      redirectUrl: '/dashboard'
    });
    
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}