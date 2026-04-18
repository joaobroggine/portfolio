"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

type NavItem = { id: string; label: string };

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projetos" },
    { id: "languages", label: "Idiomas" },
    { id: "about", label: "Sobre" },
    { id: "certificates", label: "Certificados" },
  ];

  const toggleMenu = () => setIsOpen((p) => !p);
  const closeMenu = () => setIsOpen(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    closeMenu();

    const headerOffset = 90;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container px-3 px-md-0">
          <div className={`lux-header ${scrolled ? "lux-header-scrolled" : ""}`}>
            <button
              type="button"
              className="brand-mark no-underline"
              onClick={() => {
                closeMenu();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Voltar ao topo"
            >
              <span className="brand-dot" />
              <span className="brand-text">BROGGINE</span>
            </button>
            <nav className="d-none d-md-flex align-items-center gap-4 font-dosis fw-bold">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="navlink lux-nav-link no-underline lux-nav-btn"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/cv/resume.pdf"
                download
                className="cv-btn no-underline d-inline-flex align-items-center gap-2"
              >
                <FiDownload />
                Baixar Currículo
              </a>
            </nav>
            <button
              onClick={toggleMenu}
              className="d-md-none menu-btn"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
      <div
        className={`mobile-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />
      <aside className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-drawer-top">
          <button
            type="button"
            className="brand-mark no-underline"
            onClick={() => {
              closeMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Voltar ao topo"
          >
            <span className="brand-dot" />
            <span className="brand-text">BROGGINE</span>
          </button>
          <button onClick={closeMenu} className="menu-btn" aria-label="Fechar menu">
            <FiX />
          </button>
        </div>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className="mobile-link no-underline mobile-nav-btn"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/cv/resume.pdf"
            download
            onClick={closeMenu}
            className="mobile-cv no-underline d-inline-flex align-items-center justify-content-center gap-2"
          >
            <FiDownload />
            Baixar Currículo
          </a>
        </nav>
      </aside>
    </>
  );
}