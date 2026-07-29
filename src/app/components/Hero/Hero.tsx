"use client"

import { useScrollContext } from "@/app/context/ScrollContext";
import AtomIcon from "../../../../public/svg_icons/atomIcon";
import style from "./hero.module.css"
import useRevealAtIntersection from "@/app/hooks/useRevealAtIntersection";
import { useEffect } from "react";

const Hero = () => {


  const {setHeroVisible} = useScrollContext();

  const [heroRef, visableHero] = useRevealAtIntersection(0.3, false);

  useEffect(() => {
    setHeroVisible(visableHero);
  })

  return (
    <div ref={heroRef} className={`flex flex-col overflow-hidden w-full min-h-screen pl-[10%] pb-[10vh] pr-10 relative`}>
      
      <div className="relative mt-[40vh]">
        <div className={`${style.atomWrapper} w-auto h-auto absolute left-1/2 lg-custom:left-0 -top-25 2xl:-top-40 xl:-top-25 lg-custom:-top-19`}>
          <AtomIcon className={`${style.atomIcon} absolute -translate-x-1/2 lg-custom:translate-x-0 z-0 w-80 2xl:w-140 xl:w-100 lg-custom:w-70`}/>
        </div>
        <div className={`relative z-10 flex flex-col items-center lg-custom:items-start`}>
          <p className={`${style.heroText1} text-[#b3b3b3] xl:text-3xl lg-custom:text-1xl`}>Hi, my name is</p>
          <h1 className={`${style.nameText} h-auto w-auto pb-4 font-semibold text-center font-roboto-slab text-custom-4xl 2xl:text-9xl xl:text-8xl lg-custom:text-6xl`}>Miloš Milivojević</h1>
          <h2 className={`${style.heroText3} font-semibold text-[#b3b3b3] text-xl 2xl:text-7xl xl:text-6xl lg-custom:text-4xl`}>Junior Web Developer</h2>
        </div>
      </div>
      
      
    </div>
  )
}

export default Hero;