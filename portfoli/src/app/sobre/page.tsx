import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim | JB"
}

export default function Page() {
  return (
    <div>
      <Header />
      <main className="mt-28 my-20 flex flex-col items-center justify-center px-4 md:px-10">
        {/* Section: Sobre mim */}
        <div className="flex w-full justify-center">
          <h1 className="font-staatliches text-4xl md:text-6xl border-b-2 border-b-black mb-9">
            Sobre mim
          </h1>
        </div>
        <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-5">
          <Image
            className="rounded-md shadow-xl drop-shadow-xl hover:scale-110 duration-500 mb-5 md:mb-0"
            src="/img/me.png"
            alt="Broggine em Anime"
            width={350}
            height={200}
          />
          <p className="text-justify indent-5">
            Meu nome é João Vitor Broggine Lopes, nasci em Taboão da Serra, São
            Paulo, e tenho 18 anos. Desde criança, sempre fui fascinado pelo
            mundo da tecnologia e programação. Lembro que passava horas
            explorando o Scratch, uma ferramenta educativa que me permitia criar
            animações e jogos simples. Foi ali que comecei a entender a lógica
            por trás da programação, e isso despertou em mim um enorme interesse
            por criar coisas no ambiente digital. Também cheguei a assistir a
            alguns vídeos sobre o Gamemaker e até tentei utilizá-lo. Embora não
            tenha me aprofundado tanto na época, consegui criar um jogo básico,
            o que foi uma conquista importante para mim e reforçou ainda mais
            minha paixão por essa área. Atualmente, estou cursando Análise e
            Desenvolvimento de Sistemas na FIAP, uma das melhores instituições
            de tecnologia do Brasil. Estudar na FIAP tem sido uma experiência
            incrível, pois estou adquirindo uma base sólida em desenvolvimento
            de software, banco de dados, lógica de programação e diversas outras
            áreas fundamentais da computação. Durante o curso, aprendi
            linguagens como Python, Java, HTML, CSS e JavaScript, e venho
            explorando frameworks modernos como NextJS, Tailwind CSS, Spring e
            outros. A cada novo aprendizado, percebo o quanto a tecnologia é
            poderosa e como ela pode transformar o mundo.
          </p>
        </section>

        {/* Section: O que a tecnologia é para mim */}
        <div className="flex w-full justify-center mt-20">
          <h1 className="font-staatliches text-4xl md:text-6xl border-b-2 border-b-black mb-9">
            O que a tecnologia é para mim?
          </h1>
        </div>
        <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-5">
          <Image
            className="rounded-md shadow-xl drop-shadow-xl hover:scale-110 duration-500 mb-5 md:mb-0"
            src="/img/code.jpg"
            alt="Código em PHP"
            width={350}
            height={200}
          />
          <p className="text-justify indent-5">
            Sempre acreditei que a programação vai muito além de escrever
            códigos; para mim, é uma forma de expressar minha criatividade,
            resolver problemas reais e transformar ideias em algo tangível que
            possa impactar positivamente o mundo. Desde pequeno, já tinha essa
            visão, mesmo que de forma ingênua, ao brincar com ferramentas como
            Scratch ou ao imaginar como seria criar meus próprios jogos ou
            aplicativos. Programar é como construir algo do zero, um espaço onde
            consigo colocar minha imaginação em prática, dando vida a soluções
            que podem facilitar o dia a dia das pessoas ou simplesmente trazer
            entretenimento e novas experiências. É fascinante pensar que, por
            meio de linhas de código, podemos criar algo tão poderoso, algo que
            pode alcançar pessoas em diferentes lugares do mundo. Hoje, com os
            conhecimentos que venho adquirindo, sinto que estou cada vez mais
            preparado para transformar ideias em realidade e contribuir com
            projetos inovadores. Ao longo do meu curso na FIAP, pude perceber o
            quanto a tecnologia evolui rapidamente e como é importante
            acompanhar essas mudanças. Além disso, acredito que a programação é
            também uma forma de colaboração. Ao criar algo, não faço isso apenas
            por mim, mas pensando em como aquilo pode ser útil para outras
            pessoas. Seja desenvolvendo uma aplicação que automatize processos,
            criando interfaces acessíveis ou elaborando sistemas inteligentes,
            vejo a programação como um meio para tornar a vida mais simples,
            eficiente e conectada. Sempre me inspiro na ideia de que a
            tecnologia tem o poder de unir pessoas, derrubar barreiras e
            oferecer oportunidades, e isso me faz ter ainda mais vontade de
            contribuir nesse cenário. Meu objetivo é continuar me aprofundando
            nesse universo, sempre aprendendo e buscando formas de fazer a
            diferença por meio da tecnologia.
          </p>
        </section>

        {/* Section: Soft Skills */}
        <div className="container px-4 py-5 mt-20">
          <h1 className="pb-4 text-center text-4xl md:text-6xl border-b-2 border-b-black">
            Soft Skills
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
            {[
              {
                title: "Determinado",
                description:
                  "Pode ter uma montanha gigante que mesmo assim, irei escalar sem mais.",
                icon: "#bootstrap",
              },
              {
                title: "Autodidata",
                description:
                  "Consigo me virar em várias situações, consigo me auto-desenvolver.",
                icon: "#cpu-fill",
              },
              {
                title: "Cultural",
                description:
                  "Entendo muito a cultura do Brasil, aprecio e amo falar sobre.",
                icon: "#calendar3",
              },
              {
                title: "Bilíngue",
                description:
                  "Consigo entender fluentemente minha língua nativa e bem o inglês.",
                icon: "#home",
              },
              {
                title: "Leal",
                description:
                  "Sempre vou preferir ter menos amigos, porque menos é mais.",
                icon: "#speedometer2",
              },
              {
                title: "Cuidadoso",
                description:
                  "Sempre estou a disposição, nunca batalhamos sozinhos.",
                icon: "#toggles2",
              },
              {
                title: "Responsável",
                description:
                  "Me dê algo, e trarei para você do jeito que pediu.",
                icon: "#geo-fill",
              },
              {
                title: "Compreensivo",
                description:
                  "Sou compreensivo, ninguém entre nós é perfeito.",
                icon: "#tools",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white border border-black p-5 shadow-md rounded-lg text-center hover:scale-125 duration-700"
              >
                <svg
                  className="mx-auto mb-4 text-black"
                  width="50"
                  height="50"
                  fill="currentColor"
                >
                  <use xlinkHref={skill.icon}></use>
                </svg>
                <h3 className="font-bold text-xl mb-2">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
