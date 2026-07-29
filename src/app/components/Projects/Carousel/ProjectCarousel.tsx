"use client"

import { ComponentType, Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import ProjectCarouselImages from "./ProjectCarouselImages";
import { ProjectCarouselDots, ProjectCarouselNext, ProjectCarouselPrev } from "./ProjectCarouselButton";

export interface Tech {
  name: string;
  icon: ComponentType<{ className?: string, color?: string }>;
  className?:string,
  color?: string;
}

export interface CarouselObject {
  title: string,
  description: string,
  techs: Tech[],
  type: "image" | "video",
  src: string
}

interface CarouselObjectList {
  setDescription: Dispatch<SetStateAction<string>>,
  setTitle: Dispatch<SetStateAction<string>>,
  setTechs: Dispatch<Tech[]>,
  carouselObjects:  CarouselObject[],
  setVisible: Dispatch<SetStateAction<boolean>>
}

const ProjectCarousel = ({
  setDescription,
  setTitle,
  setTechs,
  carouselObjects, 
  setVisible
}: CarouselObjectList) => {

  const TIME_INTERVAL = 60000;

  const carouselLength = carouselObjects.length;

  const [index, setIndex] = useState<number>(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const timerVisRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeIndex = useCallback(() => {
    setIndex((prev) => (prev + 1) % carouselLength);

  }, [carouselLength, setIndex])

  useEffect(() => {
    if(timerRef.current) clearTimeout(timerRef.current);
    if(timerVisRef.current) clearTimeout(timerVisRef.current);

    setVisible(false);

    timerVisRef.current = setTimeout(() => {
      setDescription(carouselObjects[index].description);
      setTitle(carouselObjects[index].title);
      setTechs(carouselObjects[index].techs);

      setVisible(true);
    }, 200);

    timerRef.current = setTimeout(() => {
      console.log(index);
      changeIndex();
      setVisible(false);
    }, TIME_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if(timerVisRef.current) clearTimeout(timerVisRef.current);
    }
  }, [index, changeIndex])

  const handleSetIndex =  (next: number) => {
    setIndex(next);

  }
  
  return (
    <section className="relative pt-20 w-full ">
      <div className="relative flex items-center m-0 w-full h-auto">
        <ProjectCarouselPrev className={"hidden md:block w-25 h-full z-10"} index={index} carouselLength={carouselLength} handleSetIndex={handleSetIndex} />
        <ProjectCarouselImages index={index} imagesObj={carouselObjects}/>
        <ProjectCarouselNext className={"hidden md:block w-25 h-full z-10"} index={index} carouselLength={carouselLength} handleSetIndex={handleSetIndex} />
        
      </div>
      <div className="relative m-0 w-full h-auto flex justify-center items-center">
        <ProjectCarouselPrev className={"block md:hidden w-15 h-full z-10 mt-2"} index={index} carouselLength={carouselLength} handleSetIndex={handleSetIndex} />
        <ProjectCarouselDots index={index} carouselObjects={carouselObjects} handleSetIndex={handleSetIndex} />
        <ProjectCarouselNext className={"block md:hidden w-15 h-full z-10 mt-2"} index={index} carouselLength={carouselLength} handleSetIndex={handleSetIndex} />
      </div>
      
    </section>
  )

}

export default ProjectCarousel;