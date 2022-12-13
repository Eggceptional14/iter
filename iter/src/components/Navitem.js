import Link from "next/link";
import styles from '../../styles/Landing.module.css';

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={styles['a']}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;