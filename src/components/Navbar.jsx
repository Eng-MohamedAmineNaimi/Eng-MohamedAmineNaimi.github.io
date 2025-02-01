import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"; // Ajout de l'icône de la Terre
import aminos3 from "../assets/tech/am.jpg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setShowLanguages(false);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo et nom */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={aminos3}
            alt="logo"
            className="w-9 h-9 contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            {i18n.language === "ar" ? (
              <span className="block sm:hidden text-sm">محمد أمين نعيمي</span> // Texte plus petit en mobile
            ) : (
              <span className="block sm:hidden text-sm">Mohamed Amine Naimi</span> // Texte plus petit en mobile
            )}
            <span className="hidden sm:block text-lg"> {/* Texte plus grand pour les écrans larges */}
              {i18n.language === "ar" ? "محمد أمين نعيمي" : "Mohamed Amine Naimi"}
            </span>
          </p>
        </Link>

        {/* Liens de navigation pour écrans larges */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{t(nav.title)}</a>
            </li>
          ))}
        </ul>

        {/* Réseaux sociaux avec noms et icônes */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="https://github.com/Eng-MohamedAmineNaimi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-400 transition duration-200 gap-2"
          >
            <FaGithub size={20} />
            {t("github")}
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-amine-naimi-907656263/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-400 transition duration-200 gap-2"
          >
            <FaLinkedin size={20} />
            {t("linkedin")}
          </a>
        </div>

        {/* Menu de sélection de langue avec icône Terre */}
        <div className="relative">
          <button
            className="text-white font-medium flex items-center gap-2 text-sm" // Ajout de text-sm pour réduire la taille de la police
            onClick={toggleLanguageDropdown}
          >
            <FaGlobe size={18} className="text-white" /> {/* Icône Terre */}
            <span>
              {i18n.language === "en" && "English"}
              {i18n.language === "fr" && "Français"}
              {i18n.language === "ar" && "العربية"}
            </span>
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span className="ml-2 text-xs text-gray-300">
              {t("")} {/* Ajout du texte "Sélectionner la langue" */}
            </span>
          </button>

          {showLanguages && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
              <ul>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-sm" // Taille de police réduite pour les options aussi
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-sm"
                  onClick={() => handleLanguageChange("fr")}
                >
                  Français
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-sm"
                  onClick={() => handleLanguageChange("ar")}
                >
                  العربية
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Menu hamburger pour écrans petits */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{t(nav.title)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
