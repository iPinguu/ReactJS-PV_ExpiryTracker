'use client'

import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";
import  Header  from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {

  const router = useRouter();
  
  return (
    <main className={styles.main}>
      <Header/>

      <div className={styles.centerElement}>
        <div id="buttonDiv" className={styles.buttonDiv}>
          <button type="button" onClick={() => router.push('pages/showProducts')} className={styles.button}>Show Expiring Products</button>
          <button className={styles.button}>Add Product</button>
          <button className={styles.button}>Edit a Product</button>
        </div>
      </div>

      <Footer />
    </main> 
  );
}
