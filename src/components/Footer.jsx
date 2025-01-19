import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="w-full bg-primary text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Nom et Copyright */}
        <p className="text-[14px]">
          {t("name")} © {new Date().getFullYear()}
        </p>

        {/* Liens avec icônes */}
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/Eng-MohamedAmineNaimi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-secondary transition duration-200"
          >
            <FaGithub size={20} />
            {t("github")}
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-amine-naimi-907656263/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-secondary transition duration-200"
          >
            <FaLinkedin size={20} />
            {t("linkedin")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
