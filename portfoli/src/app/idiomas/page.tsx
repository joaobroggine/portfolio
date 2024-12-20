import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idiomas | JB"
}

export default function page() {
  return (
    <div className="flex flex-col overflow-x-hidden h-screen text-black">
      <Header />
      <main className="flex flex-col items-center justify-center mt-20 space-y-7 px-4">
        <div className="flex flex-col items-center space-y-7 w-full max-w-4xl mx-auto">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/estadosunidos.webp"
            alt="Estados Unidos"
            width={300}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
            Considero meu nível de inglês avançado no geral. Tenho muita confiança na minha capacidade de ler e escrever na língua com facilidade. No entanto, quando se trata de conversação, acredito que meu nível seja mais intermediário. Consigo me comunicar e manter conversas, mas reconheço que há espaço para melhorar a fluência e a pronúncia. Ainda assim, acredito que minha proficiência em inglês é sólida e me permite lidar bem com a maioria das situações.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7 pt-11 border-t-2 border-black w-full max-w-4xl mx-auto">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/espanha.png"
            alt="Espanha"
            width={300}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
            Tenho conhecimentos básicos em espanhol. Embora não consiga manter uma conversa fluente, entendo o suficiente para acompanhar algumas falas e expressões comuns. Consigo ler textos simples e identificar o contexto geral, além de entender partes de uma conversa, especialmente quando as palavras são mais comuns ou quando o contexto ajuda. Na escrita, também consigo me expressar de forma simples, mas ainda tenho dificuldades com a conjugação verbal e estruturas mais complexas. Apesar disso, estou sempre buscando melhorar e expandir meus conhecimentos para me tornar mais confortável em situações onde o espanhol seja necessário.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7 pt-11 border-t-2 border-black w-full max-w-4xl mx-auto">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/libras.webp"
            alt="Libras"
            width={300}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
            Tenho um certificado de conclusão de curso em Libras, mas meus conhecimentos ainda estão em um nível básico. Durante o curso, aprendi bastante sobre a língua de sinais e suas estruturas, o que me proporcionou uma boa base. No entanto, ainda tenho dificuldades em me comunicar de forma fluente e me sinto mais confortável em situações simples. Embora eu consiga compreender algumas expressões e sinais, a prática e a fluência ainda são áreas que estou desenvolvendo. Reconheço a importância de continuar praticando para melhorar minha habilidade de me comunicar de forma mais eficaz com pessoas surdas e continuar aprimorando meus conhecimentos na língua de sinais.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
