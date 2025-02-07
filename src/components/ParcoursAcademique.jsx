import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { UAS, ISET, ARM, educ } from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const icons = [UAS, ISET, ARM, educ];

const ParcoursCard = ({ parcours, icon }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={parcours.date}
    iconStyle={{ background: "#383E56", display: "flex", justifyContent: "center", alignItems: "center" }}
    icon={<img src={icon} alt={parcours.title} className="w-full h-full object-cover rounded-full" />}
  >
    <h3 className="text-white text-[24px] font-bold">{parcours.title}</h3>
    <p className="text-secondary text-[16px] font-semibold">{parcours.institution}</p>
    <p className="mt-3 text-secondary text-[14px]"><strong>Spécialité :</strong> {parcours.speciality}</p>
  </VerticalTimelineElement>
);

const ParcoursAcademique = () => {
  const { t } = useTranslation();
  const parcours = t("parcours-academique.education", { returnObjects: true });

  return (
    <section className="py-16">
      <motion.div variants={textVariant()} className="text-center">
    
        <h2 className={`${styles.sectionHeadText}`}>{t("parcours-academique.title")}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {parcours.map((item, index) => (
            <ParcoursCard key={index} parcours={item} icon={icons[index]} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(ParcoursAcademique, "parcours");
