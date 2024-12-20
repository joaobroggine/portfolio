import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

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
      </main>
      <Footer />
    </div>
  )
}
