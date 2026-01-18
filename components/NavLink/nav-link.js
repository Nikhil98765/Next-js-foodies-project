'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './nav-link.module.css';

export const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.link} ${path.startsWith(href) ?  styles.active : ''}`}
    >
      {children}
    </Link>
  );
}