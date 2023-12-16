import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Pesquise por produto..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Novo Produto</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Título</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Criado em:</td>
            <td>Estoque</td>
            <td>Ação</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                IPhone
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>R$ 9999,00</td>
            <td>16.12.2023</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    Visualizar
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Deletar
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
