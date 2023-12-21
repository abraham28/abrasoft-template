"use client";
import React from "react";
import styles from "./LargeHeader.module.scss";

import NavLinks from "./NavLinks";

const LargeHeader = () => {
  return (
    <div className={styles.linksContainer}>
      <NavLinks />
    </div>
  );
};

export default LargeHeader;
