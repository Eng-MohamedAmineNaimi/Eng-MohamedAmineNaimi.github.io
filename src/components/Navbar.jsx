import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
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
            src={"/src/assets/aminos2.jpg"}
            alt="logo"
            className="w-9 h-9 contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {i18n.language === "ar" ? (
              <span className="sm:block hidden">محمد أمين نعيمي</span>
            ) : (
              <span className="sm:block hidden">Mohamed Amine Naimi</span>
            )}
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

        {/* Menu de sélection de langue */}
        <div className="relative ml-4">
          <button
            className="text-white font-medium relative z-20"
            onClick={toggleLanguageDropdown}
          >
            {i18n.language === "en" && "English"}
            {i18n.language === "fr" && "Français"}
            {i18n.language === "ar" && "العربية"}
          </button>

          {showLanguages && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
              <ul>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageChange("fr")}
                >
                  Français
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
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
