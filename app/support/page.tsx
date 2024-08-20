/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Breadcrumbs from '../components/breadcums/breadcum';
const SupportPage = () => {
  return (
    <section className="bg-[#0c0c24] py-10 sm:py-16 md:py-20">
        <Breadcrumbs/>
      <div className=" mx-auto px-8 pt-16">
        <div className="bg-[#0c0c24] flex flex-col lg:flex-row gap-8 ">
          <div className="w-full lg:w-1/2  mb-8 lg:mb-0">
            <div className="bg-[#1e1e26] border border-[rgb(77,76,90)] rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Informations de contact</h2>
              <p className="text-gray-400 mb-8">
                N'hésitez pas à nous contacter pour toute question concernant nos NFTs.
              </p>
              <div className="mb-8">
                <p className="text-gray-400 mb-2">
                  <span className="block">info@nftstore.com</span>
                  <span className="block">+33 1 23 45 67 89</span>
                  <span className="block">Ouvert du lundi au vendredi</span>
                  <span className="block">9h00 - 18h00</span>
                </p>
              </div>
              <div>
               
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="bg-[#1e1e26] border-[rgb(77,76,90)] border rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl text-white font-bold mb-4 sm:mb-6">Contactez-nous</h2>
              <p className="text-gray-400 mb-8">
                Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
              </p>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">Votre nom</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" placeholder="Entrez votre nom" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2">Votre email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Entrez votre email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Votre message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border rounded-lg" placeholder="Tapez votre message"></textarea>
                </div>
                <button type="submit" className="w-full sm:w-auto bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition duration-300">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;