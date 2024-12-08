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
            <h1 className='text-7xl w-3/4'>
              Olá, Sou Broggine, programador em
              <span className="animate-color-change"> NEXT.JS14</span>
            </h1>
            <div className='flex items-center w-full pl-20 space-x-2'>
              <a href="https://github.com/joaobroggine" target='_blank'>
                <Image className='hover:scale-110 duration-300' src="/img/githubicon.webp" alt='Github Icon' width={50} height={50} />
              </a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-broggine-5b92a02b2/?trk=opento_sprofile_goalscard" target='_blank'>
                <Image className='hover:scale-110 duration-300' src="/img/linkedin.png" alt='Linkedin Icon' width={42} height={42} />
              </a>
            </div>
          </div>
          <div className='w-1/2 h-full bg-[#87cefa] flex items-center justify-center'>
            <Image className='rounded-full hover:scale-110 duration-500 shadow-xl' src="/img/me.png" alt='Broggine' width={400} height={400} />
          </div>
        </div>
      </main>
      <section className="mt-16 flex justify-center items-center flex-wrap gap-8">
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/html.webp" alt="HTML Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/css.png" alt="CSS Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/javascript.webp" alt="JavaScript Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/typescript.png" alt="TypeScript Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/tailwind.png" alt="Tailwind Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/react.png" alt="React Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/nextjs.png" alt="NextJS Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/python.webp" alt="Python Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/java.png" alt="Java Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/spring.png" alt="Spring Icon" width={40} height={40} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-xl border-2 border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110">
          <Image src="/img/oracledb.png" alt="OracleDB Icon" width={40} height={40} />
        </div>
      </section>
      <section className='mt-20 w-screen h-40 space-y-4 flex flex-col justify-center items-center'>
        <h1 className='font-staatliches text-5xl text-white'>Biografia</h1>
        <p className='font-fauna w-2/3 text-white drop-shadow-xl text-center'>
         Sou João Vitor Broggine Lopes, programador apaixonado por tecnologia e inovação. Atualmente, estudo Análise e   Desenvolvimento de Sistemas na FIAP e tenho experiência com OracleDB, Java, Springboot, Python, JavaScript, React e Next.js. Busco sempre aplicar boas práticas de desenvolvimento para criar soluções eficientes e melhorar a experiência do usuário. Estou constantemente aprendendo e explorando novas tecnologias para enfrentar os desafios do futuro da TI.
        </p>
      </section>
      <h1 className='font-staatliches text-5xl text-center mt-20 text-white'>Projetos</h1>
      <section className='mt-20 w-full h-80 flex flex-col justify-center items-center mb-11'>
        <div className='w-3/5 bg-[#ffffff80] rounded-xl h-full items-start flex p-6 hover:scale-110 duration-700'>
          <a href="https://lightwatts.vercel.app/" target='_blank'>
            <Image className='rounded-sm hover:opacity-30 duration-500'
            src="/img/lighwats.png" alt='Lightwatts' width={1800} height={600}></Image>
          </a>
          <div className='flex flex-col p-4'>
            <div className='flex'>
              <Image className='object-contain'
              src="/img/html.webp" alt="HTML Icon" width={38} height={50}></Image>
              <Image className='object-contain'
              src="/img/typescript.png" alt="Typescript Icon" width={38} height={50}></Image>
              <Image className='object-contain'
              src="/img/tailwind.png" alt="Tailwind Icon" width={38} height={50}></Image>
              <Image className='object-contain mr-2 ml-1'
              src="/img/react.png" alt="React Icon" width={38} height={50}></Image>
              <Image className='object-contain'
              src="/img/nextjs.png" alt="NextJS Icon" width={38} height={50}></Image>
            </div>
            <p className='font-fauna w-5/6 mt-3 text-[#3f3f3f] text-justify'>
            Lightwatts é um site desenvolvido utilizando as melhores práticas, com tecnologias modernas, 
            focado na economia de energia. Ele gera relatórios para ajudar na redução do consumo elétrico.
            </p>
            <a href="https://github.com/LightWatts" target='_blank'>
              <Image className='object-contain mt-2 hover:opacity-30 duration-500'
                src="/img/githubicon.webp" alt="Github Icon" width={50} height={50}></Image>
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
