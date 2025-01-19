import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { postgresql, express, postman, ST, ODC } from "../assets";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const FormationCard = ({ formation }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={formation.date}
      iconStyle={{ 
        background: formation.iconBg, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
          <img
            src={formation.icon}
            alt={formation.organisme}
            className="w-full h-full object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{formation.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {formation.organisme}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {formation.content.map((item, index) => (
          <li key={`formation-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {item}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Forma = () => {
  const formations = [
    {
      title: "AWS Cloud Practitioner Certification",
      date: "Novembre 2023 – Février 2024",
      organisme: "Orange Digital Center, La Marsa, Tunisie",
      icon: ODC,
      iconBg: "#E6DEDD",
      content: [
        "Compétences en Cloud Computing : Linux, Python, réseau, sécurité, bases de données relationnelles",
        "Utilisation des services AWS : S3, RDS, EC2, IAM, etc.",
        "Apprentissage collaboratif et conception d'applications pratiques",
      ],
    },
    {
      title: "Formation Full Stack Developer",
      date: "Octobre 2022 – Mars 2023",
      organisme: "SMART TUNISIAN TECHNOPARKS, Pôle Technologique El Ghazela, Tunisie",
      icon: ST,
      iconBg: "#E6DEDD",
      content: [
        "Technologies étudiées : Scrum, Git, Java, JEE, Spring Boot, Angular",
      ],
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Mes Formations</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Formations Professionnelles.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {formations.map((formation, index) => (
            <FormationCard key={`formation-${index}`} formation={formation} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Forma, "formations");
