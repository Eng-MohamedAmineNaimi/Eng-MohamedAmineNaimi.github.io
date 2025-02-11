import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { postgresql, express, postman, ST, ODC } from "../assets";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const formations = [
    {
      title: t("aws_certification"),
      date: t("aws_date"),
      organisme: t("aws_organisme"),
      icon: ODC,
      iconBg: "#E6DEDD",
      content: [t("aws_competences"), t("aws_services"), t("aws_collaboration")],
    },
    {
      title: t("fullstack_training"),
      date: t("fullstack_date"),
      organisme: t("fullstack_organisme"),
      icon: ST,
      iconBg: "#E6DEDD",
      content: [t("fullstack_technologies")],
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("mes_formations")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("formations_professionnelles")}</h2>
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
