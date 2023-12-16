import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Image from "next/image";

const menuItems = [
  {
    title: "Páginas",
    list: [
      {
        title: "Painel de controle",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Usuários",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Produtos",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transações",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Usuário",
    list: [
      {
        title: "Configurações",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ajuda",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className="styles.userDetail">
          <span className={styles.username}>Ariel Troian</span>
          <span className={styles.userTitle}>Administrador</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
