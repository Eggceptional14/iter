import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import styles from '../../styles/Landing.module.css';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div className={styles['container']}>
    <header className={styles['header']}>
      <nav className={styles[`nav`]}>
        <Link href={"/"}>
          <a className={styles[`a`]}>
            <h1 className="logo">ITER</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles[`nav__menu-bar`]}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <SearchBar />
        <div className={styles['nav__menu-list']}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Navbar;