'use client'

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import  Header  from "@components/Header";
import Footer from "@components/Footer";

export default function Login() {

  const router = useRouter();
  
  return (
    <main className={styles.main} style={{backgroundColor: "#233746"}}>
      
      <div style={{backgroundColor: "#0074C7", height: "120px"}}>
        {/* Purely cosmetic, to fulfill UI design */}
      </div>
      
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
              <button type="button" onClick={() => router.push('pages/home')} className={styles.button} style={{backgroundColor:"#2B7C16", border: "0px solid"}}>Login</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main> 
  );
}
