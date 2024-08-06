import styles from '@/app/page.module.css';
import DisplayImage from './logo';
import React from "react";

const header = () => {
    return(
        <div id="headerDiv" className={styles.header}>
            <div className={"centerElement"}> 
            <DisplayImage imageAddr={"/images/PV_logo_transparent.png"} altText={"PetValu Logo"}/> 
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

export default header;