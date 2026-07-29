"use client"

import { useEffect, useRef, useState } from "react";
import style from "./about.module.css";
import useRevealAtIntersection from "@/app/hooks/useRevealAtIntersection";
import HTMLicon from "../../../../public/svg_icons/HTMLicon";
import CSSicon from "../../../../public/svg_icons/CSSicon";
import JSicon from "../../../../public/svg_icons/JSicon";
import TSicon from "../../../../public/svg_icons/TSicon";
import ReactIcon from "../../../../public/svg_icons/ReactIcon";
import NEXTicon from "../../../../public/svg_icons/NextJsIcon";
import NodeJsIcon from "../../../../public/svg_icons/NodeJsIcon";
import MySQLicon from "../../../../public/svg_icons/MySQLicon";
import GITicon from "../../../../public/svg_icons/GitIcon";
import GitHubIcon from "../../../../public/svg_icons/GitHubIcon";

const About = () => {

  const [textVal, setTextVal] = useState("")
  const [counter, setCounter] = useState(0)

  const [aboutRef, aboutVisible] = useRevealAtIntersection(0.3);
  const [whatIdoRef, whatIdoVisible] = useRevealAtIntersection(0.4);
  const [techsRef, techsVisible] = useRevealAtIntersection(0.3);

  const aboutMeText = `Experienced in building academic and personal projects using Angular and Node.js. Strong understanding of REST APIs, databases, and application architecture. Motivated to grow and contribute as a Junior Developer in a collaborative development environment. Fluent in English.`

  const timeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if(counter < aboutMeText.length && aboutVisible){
      let delay = 10;

      if(counter === 0) delay = 310;

      timeRef.current = setTimeout(() =>{
        setTextVal(prev => {
          return prev + aboutMeText[counter]
        });

        setCounter(prev => prev+1);
      }, delay)
    }

    return () => {
      if(timeRef.current) clearTimeout(timeRef.current);
    }
  }, [aboutVisible, counter, aboutMeText])

  return (
    <div className="flex flex-col w-full h-auto bg-[#f0f9fa] items-center">
      <div ref={aboutRef} className="w-[90%] xl:w-[50%] lg:w-[80%] h-auto my-50">
        <p className={`
          ${aboutVisible ? `${style.aboutText} ${style.text1}` : ""} 
          text-[#3a3842] 
          text-lg 
          2xl:text-2xl 
          xl:text-xl  
          font-semibold 
          opacity-0`}
        >About me</p>

        <p className={`
          ${aboutVisible ? `${style.aboutText} ${style.text2}` : ""} 
          text-[#797979]
          text-2xl 
          2xl:text-5xl 
          xl:text-4xl 
          lg-custom:text-3xl 
          font-semibold 
          mt-10 
          opacity-0`}
        >Final-year Software Engineering student with strong foundations in full-stack web development</p>

        <p className={`
          ${aboutVisible ? `${style.aboutText} ${style.text3}` : ""} 
          text-[#464646] 
          text-xl 
          2xl:text-2xl 
          font-semibold 
          mt-10 
          w-full 
          mx-auto 
          opacity-0 
          min-h-[4lh]`}
          >{ textVal }</p>

      </div>

      <div ref={whatIdoRef} className={`flex flex-col w-[90%] xl:w-[50%] lg:w-[80%] h-auto items-center`}>
        <p className={`
          ${whatIdoVisible ? `${style.aboutText} ${style.text1} ${style.underline}` : ""} 
          text-[#797979] 
          text-2xl 
          2xl:text-4xl 
          xl:text-3xl 
          font-semibold 
          opacity-0 
          mb-20`}
        >What i do</p>

        <p className={`
          ${whatIdoVisible ? `${style.aboutText} ${style.text2}` : ""} 
          text-[#464646] 
          text-xl 
          2xl:text-2xl 
          font-semibold 
          opacity-0 `}
        >I build responsive web applications with modern technologies such as React, Next.js, Node.js, and SQL. I enjoy creating clean user interfaces and developing reliable backend functionality.</p>

      </div>

      <div ref={techsRef} className={`flex flex-col w-full xl:w-[50%] lg:w-[80%] h-auto items-center my-50`}>
        <p className={`
          ${techsVisible ? `${style.aboutText} ${style.text1} ${style.underline}` : ""} 
          text-[#797979] 
          text-2xl 
          2xl:text-4xl 
          xl:text-3xl 
          font-semibold 
          opacity-0 
          mb-10
          2xl:mb-20`}>Tech Stack</p>

        <div className="flex w-full h-auto max-w-250 justify-center mb-20 flex-wrap">
          <HTMLicon className={`${techsVisible ? `${style.techIcon} [animation-delay:0s]` : ""} h-auto w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <CSSicon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.1s]` : ""} h-auto w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <JSicon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.2s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <TSicon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.3s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <ReactIcon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.4s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <NEXTicon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.5s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <NodeJsIcon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.6s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <MySQLicon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.7s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <GITicon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.8s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
          <GitHubIcon className={`${techsVisible ? `${style.techIcon} [animation-delay:0.9s]` : ""} w-20 2xl:w-25 m-5 lg:m-10 opacity-0`} />
        </div>

      </div>
      
    </div>
  )
}

export default About;