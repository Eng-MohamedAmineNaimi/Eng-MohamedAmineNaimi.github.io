import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import aminos2 from "../assets/tech/aminos2.jpg";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === "ar"; // Détection de la langue arabe

  return (
    <section
      className={`relative w-full h-screen mx-auto`}
      dir={isRtl ? "rtl" : "ltr"} // Gestion de la direction
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-0`}
      >
        {/* Contenu principal */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* Texte principal */}
          <div className="flex flex-col items-start">
            <h1
              className={`${styles.heroSubText} mt-0 text-[#7A238A] text-center`}
            >
              {t("hero.greeting")} <br />
            </h1>
            <h1 className={`${styles.heroHeadText} text-white`}>
              <span className="text-white">{t("hero.name")}</span>
            </h1>
          </div>

          {/* Photo centrée */}
          <img
            src={aminos2}
            alt="Profile"
            className="w-60 h-60 rounded-full object-cover mt-4"
          />

          {/* Texte métier centré */}
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          >
            {t("hero.job")}
          </p>
        </div>
      </div>

      {/* Bouton déplacé vers la droite */}
      <div className="absolute right-10 xs:bottom-10 bottom-20 flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
