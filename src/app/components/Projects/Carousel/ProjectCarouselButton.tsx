"use client"
import styles from './projectCarousel.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { CarouselObject } from './ProjectCarousel';

interface ButtonProps {
  index: number,
  carouselLength: number,
  handleSetIndex: (next: number) => void,
  className: string
}

interface ButtonDotsProps {
  index: number,
  carouselObjects:  CarouselObject[],
  handleSetIndex: (next: number) => void
}

export const ProjectCarouselNext = ({
  index,
  carouselLength,
  handleSetIndex,
  className
}: ButtonProps) => {


  return (
    <button onClick={() => handleSetIndex(index+1 > carouselLength-1 ? 0 : index+1)} className={`${className} ${styles.arrowButtonRight}`}>
      <ChevronRightIcon className={`${styles.arrowIcon}`} />
    </button>
  )
}

export const ProjectCarouselPrev =  ({
  index,
  carouselLength,
  handleSetIndex,
  className
}: ButtonProps) => {


  return (
    <button onClick={() => handleSetIndex(index-1 < 0 ? carouselLength-1 : index-1)} className={`${className} ${styles.arrowButtonLeft}`}>
      <ChevronLeftIcon className={`${styles.arrowIcon}`} />
    </button>
  )
}

export const ProjectCarouselDots = ({
  index,
  carouselObjects,
  handleSetIndex
}: ButtonDotsProps) => {

  return (
    <div className='h-full w-auto flex items-center justify-center mt-2'>
      {carouselObjects.map((_, idx) => (
        <button 
          key={idx} 
          className={`mx-2 w-8 h-8 border-5 border-[#ffffff] rounded-full box-border ${styles.dotButton} ${idx === index ? styles.dotButtonTrue : ""}`}
          onClick={() =>handleSetIndex(idx)}
        >
        </button>
      ))}
    </div>
  )
}
