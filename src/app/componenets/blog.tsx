"use client";
import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
import styles from "../componenets/styel.css/blog.module.css"; 

const heebo = Heebo({ subsets: ["latin"] });

const BlogPage = () => {
  return (
    <div id="blog" className={`${styles.blogContainer}`}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${heebo.className}`}>
          Blog Page
        </h2>
        <Link href={"/"} className={`${styles.homeLink} ${heebo.className}`}>
          Home
        </Link>
      </div>
      <div className={styles.blogContent}>
        <div className={styles.innerContent}>
          <h1 className={`${styles.blogTitle} ${heebo.className}`}>
            Blog Title
          </h1>
          <div className={styles.metaInfo}>
            <p className={`${styles.metaDate} ${heebo.className}`}>
              6 Oct 2024
            </p>
            <p className={`${styles.metaAuthor} ${heebo.className}`}>
              ABDUL SALAM
            </p>
          </div>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt metus a mi convallis, sit amet sollicitudin lorem
            interdum. Donec egestas, nisi ut tempus facilisis, mi purus
            sollicitudin risus, sed dapibus augue erat a nunc.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphSpacing}`}>
            Proin nec interdum nulla. Curabitur id dolor nulla. Integer commodo
            dapibus nulla id fringilla. Fusce volutpat dui eget felis
            consectetur, sit amet hendrerit est blandit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
