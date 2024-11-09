import { Heebo } from "next/font/google";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import styles from "../componenets/styel.css/footer.module.css"; 

const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.socialLinks}>
        <Link href={""}>
          <FaFacebookSquare className={styles.icon} />
        </Link>
        <Link href={""}>
          <FaInstagram className={styles.icon} />
        </Link>
        <Link href={""}>
          <FaTwitter className={styles.icon} />
        </Link>
        <Link href={""}>
          <FaLinkedin className={styles.icon} />
        </Link>
      </div>
      <p className={`${heebo.className} ${styles.copyrightText}`}>
        Copyright 2024 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
