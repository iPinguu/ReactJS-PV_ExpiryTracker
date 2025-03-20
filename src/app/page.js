'use client'

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import  Header  from "@components/Header";
import Footer from "@components/Footer";

export default function Login() {

  const router = useRouter();
  const [storeID, setStoreID] = useState('Enter Store ID');
  const [empID, setEmpId] = useState('Enter Employee ID');
  
  return (
    <main className={styles.main} style={{backgroundColor: "#233746"}}>
      
      <div style={{backgroundColor: "#0074C7", height: "120px"}}>
        <div id="subHeadingDiv" className={styles.subHeadingDiv}>
                <div className={styles.centerElement}>
                    <p style={{fontSize: "0.95rem"}}> <span style={{color: "#C1363C"}}>Unofficial</span>
                        <span> Product-Expiry Tracker&#8482;</span>
                    </p>
                </div>
            </div>
      </div>

      <div className={styles.centerElement}>
        
        
        <h4>Welcome!</h4>
        

        <div>
          <form>
            <div>
              <input defaultValue={storeID} onClick={e => setStoreID('')} type="text" className={styles.inputForm} name="storeID"/>
            </div>
            <div>
              <input defaultValue={empID} onClick={e => setEmpId('')} type="text" className={styles.inputForm} name="empID"/>
            </div>
            <div>
              <button type="button" onClick={() => router.push('pages/home')} className={styles.button} style={{backgroundColor:"#2B7C16", border: "0px solid", color: "white"}}>Login</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main> 
  );
}
