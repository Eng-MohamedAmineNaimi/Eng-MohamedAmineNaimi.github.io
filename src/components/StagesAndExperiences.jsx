import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { ARM, fre, ISET, TR, way,test } from "../assets";  // Assurez-vous que les icônes sont correctement importées

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        borderRadius: "50%",
        width: "60px",  // Définir la taille de l'icône
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-full h-full object-contain"  // S'assurer que l'icône ne dépasse pas
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.content.map((item, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {item}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const StagesAndExperiences = () => {
  const experiences = [
    {
      title: "Application School Management",
      date: "Août 2024 – Décembre 2024",
      company: "Freelance ",
      icon: fre,  // Assurez-vous que les icônes sont importées correctement
      iconBg: "#E6DEDD",
      content: [
        "Conception et Développement d'une application web de gestion scolaire complète.",
        "Technologies : MERN Stack, Docker, Passport pour l'authentification, Redux pour la gestion d'état.",
        "Mise en place de conteneurs Docker pour simplifier le déploiement.",
      ],
    },
    {
      title: " Application d'offres de stage",
      date: "Mars 2024 – Juin 2024",
      company: "Tradrly TN, Mahdia, Tunisie",
      icon: TR,
      iconBg: "#383E56",
      content: [
        "Conception et développement d'une application web et mobile d'offres de stage.",
        "Technologies : UML, HTML, CSS, React Bootstrap, JavaScript, MERN Stack.",
        "Gestion des authentifications avec Passport et gestion d'état avec Redux.",
      ],
    },
    {
      title: " Application e-commerce",
      date: "Août 2023",
      company: "1Waydev, Tunis, Tunisie",
      icon: way,
      iconBg: "#E6DEDD",
      content: [
        "Conception et Développement d'une application e-commerce.",
        "Technologies : UML, HTML, CSS, Bootstrap, JavaScript, Java, Spring Boot, Angular.",
      ],
    },
    {
      title: "Site éducatif ",
      date: "Août 2022",
      company: "Tunisia in Circuit Test Engineering, Tunisie",
      icon: test,  // Remplacer par une icône appropriée
      iconBg: "#E6DEDD",
      content: [" Analyse et conception du site éducatif pour enfants en utilisant des diagrammes UML (cas d’utilisation, classes, séquence).",
        "Conception du logo et de l’identité visuelle du site pour une meilleure attractivité et reconnaissance."
      ],
    },
    {
      title: "Application web de GMAO",
      date: "Septembre 2019 – Décembre 2019",
      company: "Institut Supérieur des Études Technologiques, Béja",
      icon: ISET,
      iconBg: "#E6DEDD",
      content: [
        "Conception et modélisation de l'application à l'aide d'UML(diagrammes de cas d'utilisation, de classes et de séquence).",
 "Développement d'une application web de Gestion deMaintenance Assistée par Ordinateur (GMAO) permettant de planifier, suivre et optimiser les interventions de maintenance.",
 "Technologies utilisées : UML, HTML, CSS, PHP7."
      ],
    },
    {
      title: "Technicien Avionique ",
      date: "2015 – 2019",
      company: "Armée de l'air tunisienne",
      icon: ARM,
      iconBg: "#383E56",
      content: ["Maintenance préventive et corrective des systèmes avioniques(navigation, communication, radar, systèmes électriques et de contrôle de vol)." ,
 "Diagnostic et réparation des pannes avioniques en respectant les normes de sécurité aéronautique.",
 "Collaboration avec les équipes d’ingénierie et de maintenance pour assurer la disponibilité opérationnelle des aéronefs."],
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Mes Expériences</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Stages & Expériences Professionnelles.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(StagesAndExperiences, "stages-experiences");
