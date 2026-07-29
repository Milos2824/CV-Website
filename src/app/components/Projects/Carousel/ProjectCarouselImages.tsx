"use client"

import { CarouselObject } from "./ProjectCarousel"
import styles from './projectCarousel.module.css'
import Image from 'next/image'

interface ImagesIndex {
  index: number,
  imagesObj: CarouselObject[]
}

const ProjectCarouselImages = ({
    index, 
    imagesObj
  }: ImagesIndex) => {


  return (
    <div className={`w-auto h-full flex flex-1 min-w-0 overflow-hidden aspect-video`}>
      {imagesObj.map((obj, id) => (
        <div 
          key={obj.src}
          className={`${styles.imageSlide} m-0 p-0 w-full h-full shrink-0 relative ease-in-out duration-300`}
          style={{transform: `translateX(${-100 * index}%)`}}
        >
          {obj.type === "image" ? (
            <Image
              src={obj.src}
              alt={obj.description}
              fill
              className=""
              sizes=""
              priority={index === id}
            ></Image>
          ) : (
            <video
              src={obj.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full "
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectCarouselImages