"use client";
import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
import styles from "../componenets/styel.css/contact.module.css"; // Import the CSS module

const heebo = Heebo({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h2 className={`${heebo.className} ${styles.contactTitle}`}>Contact Me</h2>
          <Link href="/" className={styles.homeLink}>
            Home
          </Link>
        </div>
        <form
          target="_blank"
          className={styles.contactForm}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
