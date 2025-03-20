'use client'

import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";
import  Header  from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {

  const router = useRouter();
  
  return (
    <main className={styles.main}>
      <div onClick={() => router.push('/')} id="headerDiv" className={styles.header}>
            
            <div id="subHeadingDiv" className={styles.subHeadingDiv}>
                <div className={styles.centerElement}>
                    <p style={{fontSize: "0.95rem"}}> <span style={{color: "#C1363C"}}>Unofficial</span>
                        <span> Product-Expiry Tracker&#8482;</span>
                    </p>
                </div>
            </div>
      </div>

      <div className={styles.centerElement}>
        <div id="buttonDiv" className={styles.buttonDiv}>
          <button type="button" onClick={() => router.push('showProducts')} className={styles.button}>Show Expiring Products</button>
          <button className={styles.button}>Add Product</button>
          <button className={styles.button}>Edit a Product</button>
          <button type="button" onClick={() => router.push('/')} className={styles.button} style={{background: "red", color: "white", marginTop: "70px", border: "0px solid"}}>Logout</button>
        </div>
      </div>

      <Footer />
    </main> 
  );
}
