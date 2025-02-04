import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import aminos2 from "../assets/tech/aminos2.jpg";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRtl = currentLanguage === "ar"; // Détecte la langue et applique la direction

  // Récupérer le nom de la clé 'hero.name'
  const name = t("hero.name");

  return (
    <section className="relative w-full h-screen mx-auto" dir={isRtl ? "rtl" : "ltr"}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center`}>
        {/* Centrage du texte */}
        <div className="flex flex-col items-center sm:items-start w-full">
          <h1 className={`${styles.heroSubText} mt-0 text-[#7A238A] text-center sm:text-left`}>
            {t("hero.greeting")} <br />
          </h1>
          <h1 className={`${styles.heroHeadText} text-white text-center sm:text-left`}>
          <span className="text-[32px] sm:text-[32px] md:text-[80px] font-bold">
              {/* Affichage du nom */}
              {name}
            </span>
          </h1>
        </div>

        {/* Image animée */}
        <motion.img
          src={aminos2}
          alt="Profile"
          className="w-60 h-60 rounded-full object-cover mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Texte animé */}
        <motion.p
          className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          animate={{ opacity: [0, 1, 0], y: [20, 0, 20] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {t("hero.job")}
        </motion.p>
      </div>

      {/* Animation du bouton scroll */}
      <div className="absolute right-10 xs:bottom-10 bottom-20 flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
