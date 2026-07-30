"use client"

import { useState } from "react";
import ProjectCarousel, { CarouselObject, Tech } from "./Carousel/ProjectCarousel";
import useRevealAtIntersection from "@/app/hooks/useRevealAtIntersection";
import style from "./projects.module.css"

import TSicon from "../../../../public/svg_icons/TSicon";
import ReactIcon from "../../../../public/svg_icons/ReactIcon";
import NEXTicon from "../../../../public/svg_icons/NextJsIcon";
import NodeJsIcon from "../../../../public/svg_icons/NodeJsIcon";
import SQLserverIcon from "../../../../public/svg_icons/SQLserverIcon";
import UnityIcon from "../../../../public/svg_icons/UnityIcon";
import CsharpIcon from "../../../../public/svg_icons/CsharpIcon";

const Projects = () => {

  const [projectsRef, tecprojectsVisible] = useRevealAtIntersection(0.1);

  const featuresTextList: CarouselObject[] = [
    {
      title: "Knowledge Tree",
      description: "A full-stack web application for visualizing learning paths and managing study materials with an interactive tree structure. Currently a work in progress.",
      type: "video",
      techs: [
        {
          name: "Next.js",
          icon: NEXTicon,
          className: "w-20 m-5"
        },
        {
          name: "React",
          icon: ReactIcon,
          className: "w-20 m-5"
        },
        {
          name: "TypeScript",
          icon: TSicon,
          className: "w-20 m-5"
        },
        {
          name: "Node.js",
          icon: NodeJsIcon,
          className: "w-20 m-5"
        },
        {
          name: "SQL Server",
          icon: SQLserverIcon,
          className: "text-xl text-white font-semibold m-5"
        },
      ],
      src: "/videos/KnowledgeTree.mp4"
    },
    {
      title: "Unity Interaction System",
      description: "A physics-based interaction prototype featuring object grabbing, Rigidbody movement, and collision handling. Currently a work in progress.",
      type: "video",
      techs: [
        {
          name: "Unity",
          icon: UnityIcon,
          color: "#ffffff",
          className: "w-20 m-5"
        },
        {
          name: "C#",
          icon: CsharpIcon,
          className: "w-20 m-5"
        }
      ],
      src: "/videos/GameVideoEdited.mp4"
    }
  ];

  const [visible, setVisible] = useState(true);

  const [description, setDescription] = useState<string>(featuresTextList[0].description);

  const [title, setTitle] = useState<string>(featuresTextList[0].title);
  const [techs, setTechs] = useState<Tech[]>(featuresTextList[0].techs);

  return (
    <div ref={projectsRef} className={`${tecprojectsVisible ?` ${style.techsBg} visible` : "invisible"} flex flex-col items-center justify-center w-full h-auto`}>
        <div className={`${tecprojectsVisible ?` ${style.techsBg1} visible` : "invisible"} absolute w-full h-full z-20`}></div>

        <div className="w-auto h-auto">
          <p className={`relative text-[#e6e6e6] text-4xl font-medium my-10 h-auto ${style.underline}`}>Projects</p>
        </div>

        <div className="flex flex-col items-center xl:flex-row w-full h-auto pb-30">
          <div className="flex flex-col w-[90%] xl:w-2/7 h-auto items-center justify-center px-10">
            <p className={`${style.TitleText} text-[#bf8c1f] text-center text-3xl font-semibold h-auto transition-opacity duration-200 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>{title}</p>
            <p className={`text-[#e6e6e6] text-center text-2xl font-medium mt-10 min-h-30 transition-opacity duration-200 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>{description}</p>
          </div>

          <div className="w-full lg:w-250 xl:w-3/7 flex">

            <ProjectCarousel setDescription={setDescription} setTitle={setTitle} setTechs={setTechs} carouselObjects={featuresTextList} setVisible={setVisible}/>

          </div>

          <div className="flex flex-col w-[90%] xl:w-2/7 h-auto items-center justify-center px-10">
          <p className={`${style.TitleText} text-[#bf8c1f] text-center text-3xl font-semibold h-auto transition-opacity duration-200 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>Techs:</p>
            <div className="flex flex-wrap w-auto h-auto mt-10 items-center justify-center">
              {
                techs.map(tech => {
                  const Icon = tech.icon;

                  return (
                    <Icon key={tech.name} className={`${tech.className}`} color={tech.color} />
                  )
                })
              }
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Projects;