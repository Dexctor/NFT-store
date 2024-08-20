/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { signIn } from '@/store/authSlice';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(signIn({ email, password }));
    if (signIn.fulfilled.match(resultAction)) {
      router.push('/dashboard');
    }
  };

  return (
    <section className="relative overflow-hidden bg-cover bg-top bg-no-repeat pt-[150px] pb-24">
      <div className="absolute top-0 left-0 z-[-10] h-full w-full" style={{
        background: "linear-gradient(180deg, rgba(20, 20, 32, 0.65) 0%, #141420 100%)"
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[500px] rounded-lg bg-[#2C2C39] p-8 sm:p-[60px]">
          <div className="mb-10 text-center">
            <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              Se Connecter
            </h1>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-base font-medium text-white">
                Email
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email" 
                className="w-full rounded-md border border-[#4D4C5A] bg-[#353544] py-3 px-6 text-base font-medium text-[#A1A0AE] outline-none focus:border-[#5142FC] focus:shadow-md" 
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="mb-2 block text-base font-medium text-white">
                Mot de passe
              </label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe" 
                className="w-full rounded-md border border-[#4D4C5A] bg-[#353544] py-3 px-6 text-base font-medium text-[#A1A0AE] outline-none focus:border-[#5142FC] focus:shadow-md" 
              />
            </div>
            {error && (
              <div className="mb-4 text-red-500 text-center">
                {error}
              </div>
            )}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="checkboxLabelOne" className="h-5 w-5 rounded" />
                <label htmlFor="checkboxLabelOne" className="ml-3 cursor-select-none text-base font-medium text-[#A1A0AE]">
                  Rester connecté
                </label>
              </div>
              <a href="#" className="text-base font-medium text-[#A1A0AE] hover:text-[#5142FC]">
                Mot de passe oublié ?
              </a>
            </div>
            <button 
              type="submit" 
              className="w-full rounded-md bg-[#5142FC] py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-90"
              disabled={loading}
            >
              {loading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>
          
          <p className="mt-6 text-center text-base font-medium text-[#A1A0AE]">
            Vous n'avez pas de compte ?
            <a href="/signup" className="text-white hover:text-[#5142FC]">
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}