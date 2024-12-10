import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'

export default function page() {
  return (
    <div className='flex flex-col overflow-x-hidden h-screen'>
      <Header />
      <main className='sm:ml-0 ml-2 mt-32 h-screen flex flex-col w-screen space-y-20 mb-72'>
        <div className='2xl:ml-14 flex space-x-7 md:space-x-4'>
          <Image className='sm:h-56 sm:w-64 md:w-80 md:h-60 w-32 h-32 shadow-xl hover:scale-110 duration-500'
          src="/img/estadosunidos.webp" alt='Reino Unido' width={300} height={300}/>
          <p className='lg:text-xl 2xl:text-2xl sm:text-sm sm:w-1/2 md:text-base md:w-2/3 w-7/12 text-xs text-justify text-black font-fauna'>Considero meu nível de inglês avançado no geral. Tenho muita confiança na minha capacidade de ler e escrever na língua com facilidade. No entanto, quando se trata de conversação, acredito que meu nível seja mais intermediário. Consigo me comunicar e manter conversas, mas reconheço que há espaço para melhorar a fluência e a pronúncia. Ainda assim, acredito que minha proficiência em inglês é sólida e me permite lidar bem com a maioria das situações.</p>
        </div>
        <div className='2xl:ml-48 flex lg:w-10/12 md:w-10/12 md:ml-20 lg:ml-20 xl:ml-36 xl:w-10/12 lg:flex-row-reverse xl:flex-row-reverse md:flex-row-reverse space-x-7'>
          <Image className='sm:h-56 sm:w-64 md:w-80 md:h-60 w-32 h-32 shadow-xl hover:scale-110 duration-500' 
          src="/img/espanha.png" alt='Espanha' width={300} height={300}/>
          <p className='xl:text-base lg:text-sm 2xl:text-xl sm:text-sm sm:pl-5 sm:w-full md:text-sm md:w-1/2 text-black mr-7 font-fauna w-7/12 text-xs text-justify'>Tenho conhecimentos básicos em espanhol. Embora não consiga manter uma conversa fluente, entendo o suficiente para acompanhar algumas falas e expressões comuns. Consigo ler textos simples e identificar o contexto geral, além de entender partes de uma conversa, especialmente quando as palavras são mais comuns ou quando o contexto ajuda. Na escrita, também consigo me expressar de forma simples, mas ainda tenho dificuldades com a conjugação verbal e estruturas mais complexas. Apesar disso, estou sempre buscando melhorar e expandir meus conhecimentos para me tornar mais confortável em situações onde o espanhol seja necessário.</p>
        </div>
        <div className='2xl:ml-14 flex space-x-7'>
          <Image className='sm:h-56 sm:w-64 md:w-80 md:h-60 w-32 h-32 shadow-xl hover:scale-110 duration-500'
          src="/img/libras.webp" alt='Libras' width={300} height={300}/>
          <p className='lg:text-xl 2xl:text-2xl sm:text-sm sm:w-1/2 md:text-sm md:w-2/3 w-7/12 text-xs text-justify text-black font-fauna'>Tenho um certificado de conclusão de curso em Libras, mas meus conhecimentos ainda estão em um nível básico. Durante o curso, aprendi bastante sobre a língua de sinais e suas estruturas, o que me proporcionou uma boa base. No entanto, ainda tenho dificuldades em me comunicar de forma fluente e me sinto mais confortável em situações simples. Embora eu consiga compreender algumas expressões e sinais, a prática e a fluência ainda são áreas que estou desenvolvendo. Reconheço a importância de continuar praticando para melhorar minha habilidade de me comunicar de forma mais eficaz com pessoas surdas e continuar aprimorando meus conhecimentos na língua de sinais.</p>
        </div>
      </main>
    </div>
  )
}
