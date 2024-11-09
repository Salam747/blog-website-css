import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../componenets/styel.css/navbar.module.css"; 

// For Google font
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  // Navbar items
  const navItems = [
    {
      name: "Works",
      link: "#recent",
    },
    {
      name: "Blog",
      link: "#blog",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  
  return (
    <div className={`${inter.className} ${styles.navbar}`}>
      <ul className={styles.navList}>
        {navItems.map((item, i) => (
          <li key={i} className={styles.navItem}>
            <Link href={item.link}>
              <Link href={"/"} className={styles.navLink}>{item.name}</Link>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
