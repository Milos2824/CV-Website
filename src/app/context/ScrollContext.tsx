"use client"

import { createContext, useContext, useState } from "react";

type ScrollContextType = {
  heroVisible: boolean;
  setHeroVisible: (value: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({children}: {children: React.ReactNode}) => {
  
  const [heroVisible, setHeroVisible] = useState(false);

  return (
    <ScrollContext.Provider value={{heroVisible, setHeroVisible}}>
      {children}
    </ScrollContext.Provider>
  )
}

export const  useScrollContext = () => {
  const context = useContext(ScrollContext);

  if(!context){
    throw new Error("useScrollContext must be inside provider");
  }

  return context;
}