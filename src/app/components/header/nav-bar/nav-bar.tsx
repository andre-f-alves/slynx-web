import Link from "next/link";
import styles from "./nav-bar.module.css";

const links = [
  { href: '#', text: 'Docs' },
  { href: '#', text: 'API Reference' },
  { href: '#', text: 'Features' },
  { href: '#', text: 'Use Cases' },
]

const menuItems = links.map(({ href, text }, index) => (
  <li key={index}>
    <Link href={href} className={styles.menuLink}>{text}</Link>
  </li>
))

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.navBarMenu}>
        {menuItems}
      </ul>
    </nav>
  )
}
