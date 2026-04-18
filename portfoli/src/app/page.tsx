"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

type Project = {
  title: string;
  image: string;
  desc: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export default function Page() {
  const techs = [
    "/img/linux.png",
    "/img/javascript.webp",
    "/img/typescript.png",
    "/img/bootstrap.png",
    "/img/tailwind.png",
    "/img/react.png",
    "/img/nextjs.png",
    "/img/python.webp",
    "/img/java.png",
    "/img/spring.png",
    "/img/chsarp2.png",
    "/img/dotnet.png",
    "/img/oracledb.png",
    "/img/postgres.png",
  ];

  const projects: Project[] = [
    {
      title: "Lightwatts",
      image: "/img/lighwats.png",
      desc: "Plataforma em Next.js para otimizar consumo de energia com relatórios personalizados e foco em performance.",
      href: "https://lightwatts.vercel.app/",
      external: true,
    },
    {
      title: "Calculadora Java",
      image: "/img/javacalculator2.png",
      desc: "Calculadora com JFrame em Java, interface intuitiva e operações matemáticas essenciais para uso rápido.",
      href: "/java/java-calculator-main.zip",
      download: true,
    },
    {
      title: "Portfolio",
      image: "/img/portfolioatt.png",
      desc: "Portfólio pessoal com Next.js 15, visual responsivo e foco em experiência de navegação fluida.",
      href: "#",
    },
    {
      title: "Portfólio Souza Braga",
      image: "/img/souzabraga.png",
      desc: "Projeto comercial com Next.js + Tailwind + animações suaves, combinando estética e conversão.",
      href: "https://souzabraga-u4hx.vercel.app/",
      external: true,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(id);
  }, [projects.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="lux-page text-white overflow-x-hidden pt-12">
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
      <Header />
        <main className="container py-5">
            <section className="glass hero-wrap p-4 p-lg-5 mb-5">
              <div className="row align-items-center g-4">
                <div className="col-lg-7 text-center text-lg-start">
                  <span className="hero-pill">DESENVOLVEDOR FULL STACK</span>
                  <h1 className="hero-title mt-3 mb-3">
                    Olá, eu sou <span className="broggine-name">BROGGINE</span>
                  </h1>
                  <p className="hero-sub">
                    Do design à implementação, crio soluções digitais completas com
                    foco em inovação, funcionalidade e performance — transformando
                    ideias em experiências marcantes.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mt-4">
                    <a
                      href="https://github.com/joaobroggine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-lg px-4 cta-btn"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jo%C3%A3o-broggine-5b92a02b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg px-4 cta-btn"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-center">
                  <div className="avatar-glass">
                    <img className="avatar-img"
                    src="https://avatars.githubusercontent.com/u/160923665?v=4" 
                    alt="Profile Pic" />
                  </div>
                </div>
              </div>
            </section>
            <section id="skills" className="mb-5">
            <div className="skills-head text-center mb-4">
              <h2 className="section-title mb-0">Meus conhecimentos em programação</h2>
            </div>
            <div className="skills-marquee one-line">
              <div className="skills-track">
                {[...techs, ...techs, ...techs].map((icon, i) => (
                  <div className="skill-pill" key={i}>
                    <Image src={icon} alt="Tech icon" width={48} height={48} />
                  </div>
                ))}
              </div>
            </div>
          </section>
            <section id="projects" className="mb-5">
              <h2 className="section-title text-center mb-4">Meus Projetos</h2>

              <div className="carousel-shell glass">
                <button className="nav-arrow left" onClick={prevSlide}>
                  ‹
                </button>
                <button className="nav-arrow right" onClick={nextSlide}>
                  ›
                </button>
                <div className="carousel-track">
                  {projects.map((project, index) => (
                    <article
                      key={index}
                      className={`project-slide ${index === current ? "active" : ""}`}
                    >
                      <div className="row g-0 align-items-stretch">
                        <div className="col-md-6">
                          <div className="project-image-wrap">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="project-image"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 d-flex">
                          <div className="p-4 p-lg-5 d-flex flex-column justify-content-center">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <a
                              href={project.href}
                              target={project.external ? "_blank" : undefined}
                              rel={project.external ? "noopener noreferrer" : undefined}
                              download={project.download}
                              className="btn btn-outline-light mt-2 align-self-start px-4"
                            >
                              Ver Projeto
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="dots">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`dot ${i === current ? "active" : ""}`}
                      aria-label={`Ir para projeto ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

          <section id="languages" className="mb-5">
            <div className="skills-head text-center mb-4">
              <h2 className="section-title mb-0">Comunicação e idiomas</h2>
            </div>
            <div className="lang-grid">
              <article className="lang-card glass">
                <div className="lang-media">
                  <Image
                    src="/img/estadosunidos.webp"
                    alt="Inglês"
                    width={900}
                    height={600}
                    className="lang-img"
                    priority={false}
                  />
                </div>
                <div className="lang-body">
                  <h3 className="lang-title">Inglês</h3>
                  <p className="lang-level">Avançado (leitura e escrita) • Intermediário (conversação)</p>
                  <p className="lang-text">
                    Tenho muita confiança para ler e escrever com facilidade. Em conversação,
                    consigo me comunicar e manter conversas, e continuo evoluindo fluência e pronúncia.
                  </p>
                </div>
              </article>
              <article className="lang-card glass">
                <div className="lang-media">
                  <Image
                    src="/img/espanha.png"
                    alt="Espanhol"
                    width={900}
                    height={600}
                    className="lang-img"
                  />
                </div>
                <div className="lang-body">
                  <h3 className="lang-title">Espanhol</h3>
                  <p className="lang-level">Básico</p>
                  <p className="lang-text">
                    Entendo expressões comuns e consigo ler textos simples identificando o contexto.
                    Na escrita, me expresso de forma direta e estou expandindo vocabulário e estruturas.
                  </p>
                </div>
              </article>
              <article className="lang-card glass">
                <div className="lang-media">
                  <Image
                    src="/img/libras.webp"
                    alt="Libras"
                    width={900}
                    height={600}
                    className="lang-img"
                  />
                </div>
                <div className="lang-body">
                  <h3 className="lang-title">Libras</h3>
                  <p className="lang-level">Básico (com certificado)</p>
                  <p className="lang-text">
                    Tenho certificado de conclusão e uma base sólida. Ainda estou desenvolvendo prática e fluência
                    para me comunicar com mais naturalidade em situações do dia a dia.
                  </p>
                </div>
              </article>
            </div>
          </section>
          <section id="about" className="mb-5">
            <div className="skills-head text-center mb-4">
              <h2 className="section-title mb-0">Quem eu sou e como eu penso</h2>
            </div>
            <div className="about-shell glass">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <h3 className="about-title">Sobre mim</h3>
                  <p className="about-text">
                    Sou João Vitor Broggine Lopes, 20 anos, de Taboão da Serra (SP).
                    Comecei cedo explorando lógica e criação com ferramentas como Scratch
                    e hoje sou formado em Análise e Desenvolvimento de Sistemas na FIAP.
                  </p>
                  <p className="about-text mb-0">
                    Curto construir produtos completos — do layout ao back-end — com foco
                    em performance, clareza e uma experiência de uso que dá vontade de
                    ficar no site.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="about-media">
                    <Image
                      src="/img/code.jpg"
                      alt="Código"
                      width={1200}
                      height={800}
                      className="about-img"
                    />
                  </div>
                </div>
              </div>
              <div className="about-divider" />
              <div className="row g-4">
                <div className="col-lg-7">
                  <h3 className="about-subtitle">O que a tecnologia é para mim</h3>
                  <p className="about-text">
                    Programar é transformar ideias em soluções reais. Eu gosto de criar
                    coisas úteis, bonitas e rápidas — e ver o resultado funcionando de
                    forma simples para quem usa.
                  </p>
                  <p className="about-text mb-0">
                    Também vejo tecnologia como colaboração: código bem feito, interfaces
                    acessíveis e sistemas organizados que facilitam a vida.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="soft-grid">
                    {[
                      { title: "Autodidata", desc: "Aprendo rápido e destravo sozinho." },
                      { title: "Responsável", desc: "Compromisso com prazo e qualidade." },
                      { title: "Bilíngue", desc: "Costumo ser o tradutor em meios profissionais." },
                    ].map((s, i) => (
                      <div className="soft-card" key={i}>
                        <p className="soft-title">{s.title}</p>
                        <p className="soft-desc">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="certificates" className="mb-5">
            <div className="skills-head text-center mb-4">
              <h2 className="section-title mb-0">Formações e conquistas</h2>
            </div>
            <div className="cert-grid">
              {[
                {
                  img: "/img/certificado7.png",
                  alt: "Certificado freeCodeCamp em parceria com a Microsoft",
                  title: "freeCodeCamp + Microsoft",
                  desc: "Certificação em parceria com a Microsoft, reforçando prática e consistência no aprendizado.",
                },
                {
                  img: "/img/certificado8.png",
                  alt: "Certificado de estruturas de computadores da FIAP",
                  title: "Estruturas de Computadores — FIAP",
                  desc: "Fundamentos das arquiteturas de computadores e sua influência no desempenho dos sistemas.",
                },
                {
                  img: "/img/certificado6.png",
                  alt: "Certificado de Libras da FIAP",
                  title: "Libras (Básico) — FIAP",
                  desc: "Introdução prática e visão de acessibilidade e inclusão na comunicação.",
                },
                {
                  img: "/img/certificado1.png",
                  alt: "Certificado da Fundação Bradesco de Python",
                  title: "Python (Básico) — Fundação Bradesco",
                  desc: "Fundamentos da linguagem, estruturas de dados, funções e lógica aplicada.",
                },
                {
                  img: "/img/certificado2.png",
                  alt: "Certificado da Fundação Bradesco de HTML, CSS e JavaScript",
                  title: "HTML, CSS e JavaScript — Fundação Bradesco",
                  desc: "Base sólida de web: estrutura, estilização responsiva e introdução ao JS.",
                },
                {
                  img: "/img/certificado3.png",
                  alt: "Certificado da Gran Faculdade",
                  title: "Inteligência Artificial — Gran Faculdade",
                  desc: "Conceitos e aplicações de IA, com foco em uso responsável e contexto de mercado.",
                },
                {
                  img: "/img/certificado4.png",
                  alt: "Certificado da Hashtag",
                  title: "IA aplicada a Dados — Hashtag",
                  desc: "Integração de IA com ferramentas de dados (Excel/Power BI/Python) e automações.",
                },
                {
                  img: "/img/certificado5.png",
                  alt: "Certificado da FIAP sobre Formação e Sustentabilidade",
                  title: "Formação e Sustentabilidade — FIAP",
                  desc: "Visão de impacto social/ambiental e boas práticas para tecnologia e negócios.",
                },
              ].map((c, i) => (
                <article className="cert-card glass" key={i}>
                  <div className="cert-media">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      width={1400}
                      height={900}
                      className="cert-img"
                    />
                  </div>
                  <div className="cert-body">
                    <h3 className="cert-title">{c.title}</h3>
                    <p className="cert-desc">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      <Footer />
    </div>
  );
}