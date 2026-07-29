"use client"

import Link from "next/link";
import styles from "./navbar.module.css"
import { useScrollContext } from "@/app/context/ScrollContext";

const Navbar = () => {
  const {heroVisible} = useScrollContext();

  return (
    <div className={`${!heroVisible ? styles.navBgAppear : styles.navBgDisappear} w-full h-15 flex items-center justify-center lg-custom:justify-end px-20 fixed z-30`}>
      <nav className="w-auto h-auto">
        <ul className="flex w-auto h-auto">
          <Link href={"#home"} className={`${styles.navLink} ${styles.navLink1} w-auto h-auto text-lg lg:text-2xl ml-3 mr-3 font-semibold text-[#dbdbdb]`}>
            Home
            <span className={`${styles.navLinkLine1}`}></span>
            <span className={`${styles.navLinkLine2}`}></span>
          </Link>

          <Link href={"#about"} className={`${styles.navLink} ${styles.navLink2} w-auto h-auto text-lg lg:text-2xl ml-3 mr-3 font-semibold text-[#dbdbdb]`}>
            About
            <span className={`${styles.navLinkLine1}`}></span>
            <span className={`${styles.navLinkLine2}`}></span>
          </Link>

          <Link href={"#projects"} className={`${styles.navLink} ${styles.navLink3} w-auto h-auto text-lg lg:text-2xl ml-3 mr-3 font-semibold text-[#dbdbdb]`}>
            Projects
            <span className={`${styles.navLinkLine1}`}></span>
            <span className={`${styles.navLinkLine2}`}></span>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;