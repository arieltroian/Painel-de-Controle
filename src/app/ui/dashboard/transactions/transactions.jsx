import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimas Transações</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Status</td>
            <td>Data</td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ariel Troian
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendente
              </span>
            </td>
            <td>14/12/2023</td>
            <td>R$300,00</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ariel Troian
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Concluído
              </span>
            </td>
            <td>14/12/2023</td>
            <td>R$300,00</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ariel Troian
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelado
              </span>
            </td>
            <td>14/12/2023</td>
            <td>R$300,00</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ariel Troian
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendente
              </span>
            </td>
            <td>14/12/2023</td>
            <td>R$300,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
