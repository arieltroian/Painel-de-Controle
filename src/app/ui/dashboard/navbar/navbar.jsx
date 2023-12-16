"use client";

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const pageTitle = [
  {
    title: "Painel de controle",
    path: "/dashboard",
  },
  {
    title: "Usuários",
    path: "/dashboard/users",
  },
  {
    title: "Produtos",
    path: "/dashboard/products",
  },
  {
    title: "Transações",
    path: "/dashboard/transactions",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input
            type="text"
            placeholder="Pesquisar..."
            className={styles.input}
          />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {pathname.split("/").pop()}
