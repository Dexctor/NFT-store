import { NextResponse } from 'next/server';
import { hashPassword } from '@/app/utils/auth';
import { getUserByEmail, createUser } from '@/app/services/userService';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ error: 'Cet email est déjà utilisé' }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const userId = await createUser(email, hashedPassword);

    return NextResponse.json({ user: { id: userId.toString(), email } }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}