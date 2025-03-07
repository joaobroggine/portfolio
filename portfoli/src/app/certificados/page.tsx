import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificados | JB"
}

export default function page() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center mt-20 space-y-7 px-4 text-black">
        <div className="flex flex-col items-center space-y-7 w-full max-w-4xl mx-auto">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/certificado1.png"
            alt="Certificado da Fundação Bradesco de Python"
            width={500}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
          Fiz o curso de Python - Básico da Fundação Bradesco e aprendi muitas coisas valiosas. Durante o curso, pude entender os conceitos fundamentais da linguagem, como estruturas de dados, controle de fluxo e funções. Também aprendi a trabalhar com listas, tuplas, dicionários e como manipular arquivos, o que me deu uma boa base para desenvolver meus próprios programas. Além disso, tive a oportunidade de praticar a lógica de programação, o que me ajudou a melhorar minhas habilidades de resolução de problemas. O curso foi uma excelente introdução ao mundo da programação e me proporcionou o conhecimento necessário para seguir explorando o Python em projetos mais avançados.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7 w-full max-w-4xl mx-auto pt-11 border-t-2 border-black">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/certificado2.png"
            alt="Certificado da Fundação Bradesco de HTML, CSS e Javascript"
            width={500}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
          Fiz o curso de HTML, CSS e JavaScript da Fundação Bradesco e adquiri uma base sólida em desenvolvimento web. Aprendi a criar a estrutura de páginas utilizando HTML, empregando tags semânticas para deixar o conteúdo mais organizado e acessível. Com CSS, explorei técnicas de estilização, ajustando cores, fontes, margens e criando layouts responsivos que se adaptam a diferentes dispositivos. Quando comecei com JavaScript, percebi que o conteúdo era mais introdutório, focado em conceitos básicos. Apesar de ser um módulo mais leve, foi útil para entender como o JavaScript complementa HTML e CSS no desenvolvimento web. O curso foi muito importante para consolidar meu conhecimento e despertar meu interesse por projetos mais avançados na área. Agora me sinto preparado para aplicar o que aprendi e continuar explorando novas possibilidades no desenvolvimento web.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7 w-full max-w-4xl mx-auto pt-11 border-t-2 border-black">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/certificado6.png"
            alt="Certificado de Libras da FIAP"
            width={500}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
          Durante minha graduação na FIAP, fiz o curso básico de Libras e foi uma experiência que me marcou bastante. Antes disso, eu sabia muito pouco sobre a Língua Brasileira de Sinais e, ao longo das aulas, fui percebendo o quanto a comunicação é algo poderoso e como a inclusão de verdade passa por estar disposto a aprender novas formas de se comunicar. Mesmo sendo um curso introdutório, ele me fez enxergar a importância de pequenos gestos e atitudes para tornar qualquer ambiente mais acessível. Conquistar esse certificado foi muito mais do que cumprir uma obrigação acadêmica, foi entender que ser um profissional melhor também passa por ser uma pessoa mais empática.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7 w-full max-w-4xl mx-auto pt-11 border-t-2 border-black">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/certificado3.png"
            alt="Certificado da Gran Faculdade"
            width={500}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
          Recentemente, tive a oportunidade de participar e concluir com sucesso as aulas sobre manejamento de Inteligência Artificial oferecidas pela Gran Faculdade. Foi uma experiência extremamente enriquecedora, que me proporcionou um conhecimento sólido sobre as principais técnicas, ferramentas e aplicações da IA no mercado atual. Ao final do curso, recebi meu certificado de conclusão, o que representa não apenas o fechamento desse ciclo de aprendizado, mas também um importante passo na minha jornada de desenvolvimento profissional.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7 w-full max-w-4xl mx-auto pt-11 border-t-2 border-black">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/certificado4.png"
            alt="Certificado da Hashtag"
            width={500}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
          Participei de um intensivão completo sobre o uso da Inteligência Artificial aplicada à análise de dados, promovido pela Hashtag. Ao longo das aulas, aprendi a integrar IA com ferramentas como Excel, Power BI e Python, explorando desde a coleta e tratamento de dados até a criação de modelos preditivos e automações inteligentes. Foi uma experiência muito rica, que me permitiu entender na prática como a inteligência artificial pode potencializar a análise de dados, gerar insights estratégicos e otimizar tomadas de decisão. Esse conhecimento, aliado à prática com essas ferramentas, certamente agregou muito valor à minha formação e ao meu preparo para atuar na área de tecnologia e dados.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-7 w-full max-w-4xl mx-auto pt-11 border-t-2 border-black">
          <Image
            className="rounded-md hover:scale-105 duration-500"
            src="/img/certificado5.png"
            alt="Certificado da FIAP sobre Formação e Sustentabilidade"
            width={500}
            height={200}
          />
          <p className="text-center sm:w-3/4 md:w-1/2 lg:w-3/4">
          Como parte da minha formação acadêmica na FIAP, participei do curso obrigatório de Formação e Sustentabilidade. Mesmo sendo uma disciplina obrigatória, encarei como uma excelente oportunidade de ampliar minha visão sobre o impacto das empresas e da tecnologia no meio ambiente e na sociedade. Durante o curso, pude refletir sobre a importância de práticas sustentáveis e como cada profissional pode contribuir para um futuro mais consciente e equilibrado. Ao final, recebi meu certificado de conclusão, que representa não apenas o cumprimento de uma etapa acadêmica, mas também um aprendizado valioso que levarei para minha vida profissional.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
