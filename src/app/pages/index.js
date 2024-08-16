import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>

      <div className={styles.centerElement}>
        <div id="buttonDiv" className={styles.buttonDiv}>
          <button onClick={pages.showProducts()} className={styles.button}>Show Expiring Products</button>
          <button className={styles.button}>Add Product</button>
          <button className={styles.button}>Edit a Product</button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
