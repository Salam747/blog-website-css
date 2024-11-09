import { Heebo } from "next/font/google";
import Link from "next/link";
import { RecentPostCart } from "./recentPostCart";
import styles from "../componenets/styel.css/recent.module.css"; // Adjust the path if needed

const heebo = Heebo({ subsets: ["latin"] });

const RecentPost = () => {
  return (
    <div id="recent" className={`${styles.recentContainer}`}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2 className={`${styles.headerTitle} ${heebo.className}`}>Recent post</h2>
          <Link href={"/"} className={`${styles.homeLink} ${heebo.className}`}>
            Home
          </Link>
        </div>
        <div className={styles.postsContainer}>
          <RecentPostCart />
          <RecentPostCart />
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
