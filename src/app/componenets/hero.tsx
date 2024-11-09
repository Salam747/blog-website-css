import { Heebo } from "next/font/google";
import Image from "next/image";
import React from "react";
import styles from "../componenets/styel.css/hero.module.css"; 

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className={`${styles.heroContainer} ${heebo.className}`}>
      {/* Text div */}
      <div className={styles.textContainer}>
        <h1 className={`${styles.heroTitle} ${heebo.className}`}>
          Hi, I am Abdul Salam <br />
          Creative Technologist
        </h1>
        <p className={`${styles.heroDescription} ${heebo.className}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo
          totam cumque rem error a quisquam facere, eos impedit.
        </p>
        <button className={`${styles.heroButton} ${heebo.className}`}>
          Download Resume
        </button>
      </div>

      {/* Image div */}
      <div className={styles.imageContainer}>
        <Image
          className={styles.heroImage}
          src={"/assets/hero.jpg"}
          alt="hero-img"
          width={292}
          height={299}
        />
        <div className={styles.backgroundCircle} />
      </div>
    </div>
  );
};

export default Hero;
