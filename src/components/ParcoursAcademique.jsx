import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { postgresql, express, postman,UAS, ISET, ARM, educ } from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ParcoursCard = ({ parcours }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={parcours.date}
      iconStyle={{
        background: parcours.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
          <img
            src={parcours.icon}
            alt={parcours.company_name}
            className="w-full h-full object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{parcours.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {parcours.company_name}
        </p>
      </div>
      <p className="mt-3 text-secondary text-[14px]">
        <strong>Spécialité :</strong> {parcours.specialite}
      </p>
    </VerticalTimelineElement>
  );
};

const ParcoursAcademique = () => {
  const parcours = [
    {
      title: "Diplôme National d'Ingénieur en Génie Informatique",
      date: "Septembre 2021 – Juillet 2024",
      company_name: "Université Arabe des Sciences (ESIET-FSEG), Tunis, Tunisie",
      specialite: "Génie Logiciel",
      icon: UAS,
      iconBg: "#383E56",
    },
    {
      title: "Licence Appliquée en Technologies de l'Informatique",
      date: "Février 2017 – Janvier 2020",
      company_name: "Institut Supérieur des Études Technologiques (ISET), Béja, Tunisie",
      specialite: "Multimédia et Développement Web",
      icon: ISET,
      iconBg: "#E6DEDD",
    },
    {
      title: "Brevet de Spécialité en Avionique",
      date: "Janvier 2013 – Octobre 2014",
      company_name: "École des Spécialités Aéronautiques, Sfax, Tunisie",
      specialite: "Avionique",
      icon: ARM,
      iconBg: "#383E56",
    },
    {
      title: "Baccalauréat : Sciences Techniques",
      date: "Juin 2012",
      company_name: "Lycée Abou Kacem Chebbi, Ariana, Tunisie",
      specialite: "Sciences Techniques",
      icon: educ,
      iconBg: "#E6DEDD",
    },
  ];

  return (
    <section className="py-16">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Mon Parcours</p>
        <h2 className={`${styles.sectionHeadText}`}>Parcours Académique</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {parcours.map((item, index) => (
            <ParcoursCard key={index} parcours={item} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(ParcoursAcademique, "parcours");
