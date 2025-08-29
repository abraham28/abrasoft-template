"use client";
import React, { useCallback, useState } from "react";
import { FaBars } from "react-icons/fa";
import SideNav from "./SideNav";
import styles from "./SmallHeader.module.scss";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNav = useCallback(() => {
    setNavOpen(true);
  }, []);

  const closeNav = useCallback(() => {
    setNavOpen(false);
  }, []);

  return (
    <div className={styles.sideNavOpenner}>
      <SideNav open={navOpen} onClose={closeNav} />
      <span onClick={openNav}>
        <FaBars size={32} color="var(--primary)" />
      </span>
    </div>
  );
};

export default Header;
