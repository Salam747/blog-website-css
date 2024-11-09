import React from 'react';
import { Heebo } from 'next/font/google';
import styles from "../componenets/styel.css/recentcart.module.css"; // Adjust the path if needed

const heebo = Heebo({ subsets: ["latin"] });

export const RecentPostCart = () => {
  return (
    <div className={styles.recentPostCartContainer}>
      <div className={styles.contentContainer}>
        <h2 className={`${styles.title} ${heebo.className}`}>Lorem ipsum dolor sit amet consectetur.</h2>
        <div className={styles.metadataContainer}>
          <p className={`${styles.metaText} ${heebo.className}`}>6 Oct 2024</p>
          <p className={`${styles.metaSeparator} ${heebo.className}`}>|</p>
          <p className={`${styles.metaText} ${heebo.className}`}>Design pattern</p>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, doloremque Lorem ipsum dolor, ipsum dolor sit..
        </p>
      </div>
    </div>
  );
};
