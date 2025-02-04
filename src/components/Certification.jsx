import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { AWSRES, eCertificate, CYBER, CCNA, C130 } from "../assets";

const certifications = [
  {
    name: "AWS re/Start Graduate",
    description:
      "Programme intensif de formation en cloud AWS, couvrant les compétences essentielles pour démarrer une carrière dans le cloud computing.",
    image: AWSRES,
  },
  {
    name: "OCI Devops",
    description: "Certification attestant une expertise en DevOps avec Oracle Cloud Infrastructure.",
    image: eCertificate,
  },
  {
    name: "CCNA Cyber Ops",
    description:
      "Certification axée sur les opérations de cybersécurité pour les centres de sécurité (SOC).",
    image: CYBER,
  },
  {
    name: "CCNA1",
    description:
      "Introduction aux concepts fondamentaux de la mise en réseau et des protocoles Internet.",
    image: CCNA,
  },
  {
    name: "Certification Qualification",
    description:
      "Certificat attestant une qualification spécifique pour des compétences professionnelles.",
    image: C130,
  },
];

const CertificationCard = ({ index, name, description, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-5 rounded-2xl w-full sm:w-[480px] shadow-lg"
  >
    <Tilt
      options={{
        max: 20,
        scale: 1.05,
        speed: 300,
      }}
      className="rounded-2xl"
    >
      {/* Nom au-dessus de l'image */}
      <h3 className="text-center text-white font-bold text-[20px] mb-4">{name}</h3>

      {/* Image avec taille adaptative */}
      <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={`certification-${name}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Description en dessous */}
      <div className="mt-4">
        <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Certification = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>

      {/* Correction: flex-col pour affichage en colonne sur mobile */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col sm:flex-row flex-wrap gap-10 justify-center`}>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={cert.name}
            index={index}
            name={cert.name}
            description={cert.description}
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certification, "");
