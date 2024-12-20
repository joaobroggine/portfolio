import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function page() {
  return (
    <div className="text-white overflow-x-hidden">
      <Header />
      <div className="row mt-lg-5 mt-md-5 mt-sm-5 mt-5 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center justify-center text-center rounded-3 border border-black shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 font-staatliches text-black">
            Olá, sou Broggine. Desenvolvedor Full Stack!
          </h1>
          <p className="lead text-black">
            Do design à implementação, crio soluções digitais completas que unem
            inovação, funcionalidade e performance, transformando ideias em
            experiências únicas e impactantes, tanto na interface quanto por
            trás das telas.
          </p>
          <div className="d-grid gap-2 justify-content-lg-center d-md-flex justify-content-md-center mb-4 mb-lg-3">
            <a
              href="https://github.com/joaobroggine"
              target="_blank"
              className="no-underline"
            >
              <button
                type="button"
                className="btn btn-outline-dark btn-lg px-4 me-md-2 fw-bold d-flex align-items-center justify-content-center w-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  fill="currentColor"
                  className="bi bi-github me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-broggine-5b92a02b2/"
              target="_blank"
              className="no-underline"
            >
              <button
                type="button"
                className="btn btn-outline-primary btn-lg px-4 d-flex align-items-center justify-content-center w-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                Linkedin
              </button>
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-black text-center mt-20 text-6xl font-staatliches">
        Meus conhecimentos em programação
      </h1>
      <section className="mt-16 text-black flex flex-wrap justify-center items-center gap-4">
        {[
          "/img/html.webp",
          "/img/css.png",
          "/img/javascript.webp",
          "/img/typescript.png",
          "/img/bootstrap.png",
          "/img/tailwind.png",
          "/img/react.png",
          "/img/nextjs.png",
          "/img/python.webp",
          "/img/java.png",
          "/img/spring.png",
          "/img/oracledb.png",
        ].map((icon, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border-2 border-black bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition"
          >
            <Image src={icon} alt="Tech Icon" width={35} height={35} />
          </div>
        ))}
      </section>
      <section
        className="projects-section py-5"
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        <div className="container text-center border-t-2 border-black py-5 my-6">
          <h2
            className="mb-4 font-staatliches"
            style={{ color: "#000", fontSize: "3.5rem" }}
          >
            Meus Projetos
          </h2>
          <div className="row">
            {/* Lightwatts */}
            <div className="col-md-4 mb-4">
              <div
                className="card shadow-sm h-100 hover:scale-105 duration-500"
                style={{ border: "1px solid black" }}
              >
                <img
                  src="/img/lighwats.png"
                  className="card-img-top"
                  alt="Lightwatts"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "#f4f4f4" }}
                >
                  <h5 className="card-title" style={{ fontSize: "1.5rem" }}>
                    Lightwatts
                  </h5>
                  <p className="card-text" style={{ color: "#333" }}>
                    Lightwatts é uma plataforma desenvolvida com NextJS 14,
                    React e Tailwind CSS, focada em gerar relatórios
                    personalizados para otimizar o consumo de energia elétrica
                    em residências, ajudando os usuários a reduzir custos e
                    aumentar a eficiência energética.
                  </p>
                  <a
                    href="https://lightwatts.vercel.app/"
                    target="_blank"
                    className="btn btn-outline-dark"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
            {/* Calculadora em Java */}
            <div className="col-md-4 mb-4">
              <div
                className="card shadow-sm h-100 hover:scale-105 duration-500"
                style={{ border: "1px solid black" }}
              >
                <img
                  src="/img/javacalculator.png"
                  className="card-img-top"
                  alt="Calculadora"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "#f4f4f4" }}
                >
                  <h5 className="card-title" style={{ fontSize: "1.5rem" }}>
                    Calculadora Java
                  </h5>
                  <p className="card-text" style={{ color: "#333" }}>
                    Calculadora simples desenvolvida em Java utilizando JFrame,
                    permitindo realizar operações matemáticas básicas como soma,
                    subtração, multiplicação e divisão, além de operações mais
                    complexas, com uma interface gráfica intuitiva e fácil de
                    usar.
                  </p>
                  <a
                    href="/java/java-calculator-main.zip"
                    download
                    className="btn btn-outline-dark"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio */}
            <div className="col-md-4 mb-4">
              <div
                className="card shadow-sm h-100 hover:scale-105 duration-500"
                style={{ border: "1px solid black" }}
              >
                <img
                  src="/img/portfolio.png"
                  className="card-img-top"
                  alt="Portfolio"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "#f4f4f4" }}
                >
                  <h5 className="card-title" style={{ fontSize: "1.5rem" }}>
                    Portfolio
                  </h5>
                  <p className="card-text" style={{ color: "#333" }}>
                    Portfolio pessoal criado com Next.js 15, React, Tailwind CSS
                    e Bootstrap, destacando projetos de desenvolvimento web e
                    outras conquistas, com foco em design responsivo e uma
                    navegação fluída para oferecer uma ótima experiência ao
                    usuário.
                  </p>
                  <a href="#" className="btn btn-outline-dark">
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
