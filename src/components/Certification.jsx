import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { AWSRES, eCertificate, CYBER, CCNA, C130 } from "../assets";

const certifications = [
  {
    name: "Certification AWS Cloud Practitioner",
   
    image: AWSRES,
  },
  {
    name: "Certification OCI DevOps",
  
    image: eCertificate,
  },
  {
    name: "Certification CCNA Cyber Ops",
   
    image: CYBER,
  },
  {
    name: "Certification CCNA1",
   
    image: CCNA,
  },
  {
    name: "Certification Qualification",
 
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
      <h3 className="text-center text-white font-bold text-[20px] mb-4">{name}</h3>
      <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={`certification-${name}`}
          className="w-full h-full object-contain"
        />
      </div>
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
          <h2 className={styles.sectionHeadText}>Mes Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col sm:flex-row flex-wrap gap-10 justify-center`}>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={cert.name}
            index={index}
            name={cert.name}
          
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certification, "");
