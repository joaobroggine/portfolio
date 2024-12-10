import Image from "next/image";

export default function footer() {
  return (
    <div>
      <footer className="bg-[#1f2937] w-screen h-1/3 absolute bottom-0 font-dosis
      flex flex-col items-center ">
        <div className="grid grid-cols-3">
            <div className="pr-52">
            <Image src="/img/location.png" alt="Localidade" width={50} height={50} />
            <Image src="/img/phone.png" alt="Telefone" width={50} height={50} />
            <Image src="/img/email.png" alt="Email" width={50} height={50} />
            </div>
            <Image src="/img/linkedin2.png" alt="Linkedin" width={50} height={50} />
            <Image src="/img/github2.webp" alt="Github" width={50} height={50} />
        </div>
        <p>&copy; 2024 João Vitor Broggine Lopes. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
