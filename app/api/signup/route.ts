import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';
import { User } from '@/lib/models/User';

export async function POST(request: Request) {
  try {
    const { email, username, password } = await request.json();

    // Vérifiez que tous les champs sont présents
    if (!email || !username || !password) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("nft_store");

    // Vérifiez si l'email ou le nom d'utilisateur existe déjà
    const existingUser = await db.collection('users').findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return NextResponse.json({ error: "L'email ou le nom d'utilisateur existe déjà" }, { status: 400 });
    }

    // Hachez le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créez le nouvel utilisateur
    const newUser: User = {
      email,
      username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('users').insertOne(newUser);

    return NextResponse.json({ message: "Utilisateur créé avec succès", userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    return NextResponse.json({ error: "Une erreur est survenue lors de l'inscription" }, { status: 500 });
  }
}