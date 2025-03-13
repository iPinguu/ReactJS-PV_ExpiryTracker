import styles from '@/app/page.module.css';
import DisplayImage from '@/components/Logo';
import React from "react";

export default function Header () {
    
    return(
        <div id="headerDiv" className={styles.Header}>
            <div className={styles.centerElement}> 
                <DisplayImage src={"/assets/images/PV_logo_transparent.png"} alt={"PetValu logo"}/>
            </div>
            
            <div id="subHeadingDiv" className={styles.subHeadingDiv}>
                <div className={styles.centerElement}>
                <p style={{fontSize: "0.95rem"}}> <span style={{color: "#C1363C"}}>Unofficial</span>
                <span> Product-Expiry Tracker&#8482;</span>
                </p>
                </div>
            </div>
      </div>
    );
}