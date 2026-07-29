"use client"

import { useEffect, useRef, useState } from "react";

const useRevealAtIntersection = (
  thresholdVal = 0.1,
  isOneTime = true
): [React.RefObject<HTMLDivElement | null>, boolean] => {

  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
        if(entry.isIntersecting && isOneTime){
          observer.unobserve(entry.target);
        }
      })
    }, { threshold: thresholdVal})

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [thresholdVal, isOneTime])

  return [ref, visible];
}

export default useRevealAtIntersection;