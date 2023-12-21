"use client";
import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./SideNav.module.scss";

import * as constants from "@/app/constants";
import useOutsideClick from "@/helpers/outsideClick";
import NavLinks from "./NavLinks";
import Image from "next/image";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ open, onClose }) => {
  const sideNavRef = useRef<HTMLDivElement>(null);

  useOutsideClick(sideNavRef, onClose);

  useEffect(() => {
    document.body.style.overflowX = open ? "hidden" : "unset";
  }, [open]);

  return (
    <div className={`${styles.sideNavWrapper}${open ? ` ${styles.open}` : ""}`}>
      <div
        ref={sideNavRef}
        className={`${styles.sideNav} ${open ? ` ${styles.sideNavOpen}` : ""}`}
      >
        <div className={styles.actionContainer}>
          <div className={styles.g1173412}>
            <Image
              width={0}
              height={60}
              className={styles.g1173411Icon}
              alt=""
              src="/images/company-logo.webp"
            />
          </div>
          <span className={styles.closeButton} onClick={onClose}>
            <FaTimes size={32} color="var(--secondary)" />
          </span>
        </div>
        <div className={styles.linksContainer}>
          <NavLinks onClick={onClose} />
        </div>
        <div className={styles.footer}>{constants.COPYRIGHT}</div>
      </div>
    </div>
  );
};

export default React.memo(SideNav);
