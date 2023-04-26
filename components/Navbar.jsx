import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.content}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/headphones">HEADPHONES</Link>
        </li>
        <li>
          <Link href="/speakers">SPEAKERS</Link>
        </li>
        <li>
          <Link href="/earphones">EARPHONES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
