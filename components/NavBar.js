import styles from '../styles/Navbar.module.css';

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
       <Image src={"/images/pokeball.png"} alt="pokebola" width={30} height={30}/>
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href={"/"} className='links'>Home</Link>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  )
}