import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbarBox}>
      {/* logo will be left side */}
      <p className={styles.navbarLogo}>
        Movie<span style={{ color: "white" }}>Talks</span>
      </p>

      {/* center links  */}
      <nav className={styles.navbarLinks}>
        <Link className={styles.navbarButton} href="/main">Home</Link>
        <Link className={styles.navbarButton} href="/films">Films</Link>
        <Link className={styles.navbarButton} href="/lists">Lists</Link>
        <Link className={styles.navbarButton} href="/members">Members</Link>
        <Link className={styles.navbarButton} href="/profile">Profile</Link>
        <Link className={styles.navbarButton} href="/">Logout</Link>
      </nav>
    </header>
  );
};

export default Navbar;
