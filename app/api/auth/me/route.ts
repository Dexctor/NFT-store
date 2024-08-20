import { NextResponse } from 'next/server';
import { verify, JwtPayload } from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { cookies } from 'next/headers';

export async function GET(req: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET!);

    // Vérifiez si decoded est un JwtPayload et non une chaîne de caractères
    if (typeof decoded === 'string' || !('userId' in decoded)) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("nft_store");
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ _id: decoded.userId });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ user: { id: user._id.toString(), email: user.email } });
  } catch (error) {
    return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
  }
}
