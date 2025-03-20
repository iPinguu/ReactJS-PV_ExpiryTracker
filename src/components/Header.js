'use client'

import styles from '@/app/page.module.css';
import { useRouter } from "next/navigation";
import DisplayImage from '@/components/DisplayImage';
import React from "react";

export default function Header () {
    
    const router = useRouter();

    return(
        <div onClick={() => router.push('/')} id="headerDiv" className={styles.header}>
            <div className={styles.centerElement}> 
                <DisplayImage img={{src: "PV_logo_transparent.png", alt: "PV Logo"}}/>
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