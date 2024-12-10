import React from 'react'
import Image from 'next/image'
import Header from '@/components/header'

export default function page() {
  return (
    <div className='text-white overflow-x-hidden'>
      <Header />
      <main className='font-staatliches pt-10'>
        <div className='mt-16 bg-white w-screen h-96 flex'>
          <div className='w-1/2 h-full bg-[#87cefa] flex flex-col items-center justify-center'>
            <h1 className='text-3xl sm:text-7xl w-3/4 md:text-5xl lg:text-6xl'>
              Olá, Sou Broggine, programador em
              <span className="animate-color-change"> NEXT.JS15</span>
            </h1>
            <div className='flex items-center w-full pl-8 md:pl-20 space-x-2 2xl:mr-10 xl:ml-36 md:mr-8 '>
              <a href="https://github.com/joaobroggine" target='_blank'>
                <Image className='hover:scale-110 duration-300 md:w-11/12 lg:w-11/12' src="/img/githubicon.webp" alt='Github Icon' width={50} height={50} />
              </a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-broggine-5b92a02b2/?trk=opento_sprofile_goalscard" target='_blank'>
                <Image className='hover:scale-110 duration-300 md:w-11/12 lg:w-11/12' src="/img/linkedin.png" alt='Linkedin Icon' width={42} height={42} />
              </a>
            </div>
          </div>
          <div className='w-1/2 h-full bg-[#87cefa] flex items-center justify-center'>
            <Image className='rounded-full hover:scale-110 duration-500 shadow-xl' src="/img/me.png" alt='Broggine' width={400} height={400} />
          </div>
        </div>
      </main>
      <section className="mt-16 flex flex-wrap justify-center items-center gap-4">
        {[
          "/img/html.webp",
          "/img/css.png",
          "/img/javascript.webp",
          "/img/typescript.png",
          "/img/tailwind.png",
          "/img/react.png",
          "/img/nextjs.png",
          "/img/python.webp",
          "/img/java.png",
          "/img/spring.png",
          "/img/oracledb.png",
        ].map((icon, index) => (
          <div key={index} className="p-4 rounded-xl border-2 border-gray-200 bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition">
            <Image src={icon} alt="Tech Icon" width={40} height={40} />
          </div>
        ))}
      </section>
      <section className="mt-32 w-full px-4 space-y-8 flex flex-col justify-center items-center">
        <h1 className="font-staatliches text-4xl sm:text-5xl text-white text-center">Biografia</h1>
        <p className="font-fauna text-black drop-shadow-xl text-center max-w-screen-md">
          Sou João Vitor Broggine Lopes, programador apaixonado por tecnologia e inovação. Atualmente, estudo Análise e Desenvolvimento de Sistemas na FIAP e tenho experiência com OracleDB, Java, Spring Boot, Python, JavaScript, React e Next.js. Busco sempre aplicar boas práticas de desenvolvimento para criar soluções eficientes e melhorar a experiência do usuário. Estou constantemente aprendendo e explorando novas tecnologias para enfrentar os desafios do futuro da TI.
        </p>
      </section>
      <h1 className="font-staatliches text-4xl sm:text-5xl text-center mt-20 text-white">Projetos</h1>
      <section className="mt-20 w-full flex flex-col items-center mb-11 space-y-12">
        <div className="w-11/12 sm:w-4/5 lg:w-3/5 bg-[#ffffff80] rounded-xl flex flex-col lg:flex-row items-center p-6 hover:scale-105 duration-700">
          <a href="https://lightwatts.vercel.app/" target="_blank" className="flex-shrink-0">
            <Image className="rounded-sm hover:opacity-30 duration-500" src="/img/lighwats.png" alt="Lightwatts" width={500} height={300} />
          </a>
          <div className="flex flex-col lg:ml-6 mt-4 lg:mt-0 w-full">
            <div className="flex space-x-2 justify-start items-center mb-4">
              <Image className="object-contain" src="/img/html.webp" alt="HTML Icon" width={38} height={38} /><Image className="object-contain" src="/img/typescript.png" alt="Typescript Icon" width={38} height={38} /><Image className="object-contain" src="/img/tailwind.png" alt="Tailwind Icon" width={38} height={38} /><Image className="object-contain" src="/img/react.png" alt="React Icon" width={38} height={38} /><Image className="object-contain" src="/img/nextjs.png" alt="NextJS Icon" width={38} height={38} />
            </div>
            <p className="font-fauna text-sm sm:text-base text-[#3f3f3f] text-justify">
              Lightwatts é um site desenvolvido utilizando as melhores práticas, com tecnologias modernas, focado na economia de energia. Ele gera relatórios para ajudar na redução do consumo elétrico.
            </p>
            <a href="https://github.com/LightWatts" target="_blank" className="mt-4 flex-shrink-0">
              <Image className="object-contain hover:opacity-30 duration-500" src="/img/githubicon.webp" alt="Github Icon" width={60} height={40} />
            </a>
          </div>
        </div>
        <div className="w-11/12 sm:w-4/5 lg:w-3/5 bg-[#ffffff80] rounded-xl flex flex-col lg:flex-row items-center p-6 hover:scale-105 duration-700">
          <a href="/java/java-calculator-main.zip" download className="flex-shrink-0">
            <Image className="rounded-sm hover:opacity-30 duration-500" src="/img/javacalculator.png" alt="Calculadora em Java" width={300} height={300} />
          </a>
          <div className="flex flex-col lg:ml-6 mt-4 lg:mt-0 w-full">
            <div className="flex space-x-2 justify-start items-center mb-4">
              <Image className="object-contain" src="/img/java.png" alt="Java Icon" width={70} height={50} />
            </div>
            <p className="font-fauna text-sm sm:text-base text-[#3f3f3f] text-justify">
              A Calculadora em Java com JFrame permite realizar operações matemáticas básicas por meio de uma interface gráfica. O usuário interage com botões para inserir números e obter resultados. É uma boa introdução ao desenvolvimento de interfaces gráficas e manipulação de eventos em Java.
            </p>
            <a href="https://github.com/joaobroggine/java-calculator" target="_blank" className="mt-4 flex-shrink-0">
              <Image className="object-contain hover:opacity-30 duration-500" src="/img/githubicon.webp" alt="Github Icon" width={60} height={40} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
