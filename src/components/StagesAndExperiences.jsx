import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { ARM, fre, ISET, TR, way, test } from "../assets";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
          <img src={experience.icon} alt={experience.company} className="w-full h-full object-contain" />
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
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("stages-experiences.schoolManagement.title"),
      date: "Août 2024 – Décembre 2024",
      company: t("stages-experiences.schoolManagement.company"),
      icon: fre,
      iconBg: "#E6DEDD",
      content: t("stages-experiences.schoolManagement.content", { returnObjects: true }),
    },
    {
      title: t("stages-experiences.internshipApp.title"),
      date: "Mars 2024 – Juin 2024",
      company: t("stages-experiences.internshipApp.company"),
      icon: TR,
      iconBg: "#383E56",
      content: t("stages-experiences.internshipApp.content", { returnObjects: true }),
    },
    {
      title: t("stages-experiences.ecommerceApp.title"),
      date: "Août 2023",
      company: t("stages-experiences.ecommerceApp.company"),
      icon: way,
      iconBg: "#E6DEDD",
      content: t("stages-experiences.ecommerceApp.content", { returnObjects: true }),
    },
    {
      title: t("stages-experiences.educationalSite.title"),
      date: "Août 2022",
      company: t("stages-experiences.educationalSite.company"),
      icon: test,
      iconBg: "#E6DEDD",
      content: t("stages-experiences.educationalSite.content", { returnObjects: true }),
    },
    {
      title: t("stages-experiences.gmaoApp.title"),
      date: "Septembre 2019 – Décembre 2019",
      company: t("stages-experiences.gmaoApp.company"),
      icon: ISET,
      iconBg: "#E6DEDD",
      content: t("stages-experiences.gmaoApp.content", { returnObjects: true }),
    },
    {
      title: t("stages-experiences.avionicsTech.title"),
      date: "2015 – 2019",
      company: t("stages-experiences.avionicsTech.company"),
      icon: ARM,
      iconBg: "#383E56",
      content: t("stages-experiences.avionicsTech.content", { returnObjects: true }),
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t("stages-experiences.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("stages-experiences.title")}</h2>
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
