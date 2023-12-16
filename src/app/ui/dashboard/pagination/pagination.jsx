import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Anterior
      </button>
      <button className={styles.button}>Próxima</button>
    </div>
  );
};

export default Pagination;
