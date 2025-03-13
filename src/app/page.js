'use client'

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import  Header  from "@components/Header";
import Footer from "@components/Footer";

export default function Login() {

  const router = useRouter();
  
  return (
    <main className={styles.main}>
      <Header/>

      <div className={styles.centerElement}>
        
        <div>
          <form>
            <div>
              <input className={styles.inputForm} name="storeID"/>
            </div>
            <div>
              <input className={styles.inputForm} name="empID"/>
            </div>
            <div>
              <button type="button" onClick={() => router.push('pages/home')} className={styles.button}>Login</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main> 
  );
}
