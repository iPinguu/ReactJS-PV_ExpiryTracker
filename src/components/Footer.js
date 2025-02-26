import React from "react";
import ColoredLine from "@/components/ColoredLine";
import styles from "@/app/page.module.css";

export default function Footer() {
    return (
        <div id="footerDiv" className={styles.footer}>
            <h6 style={{color: "#C1363C"}}>Contact for Cease and Desist</h6>
                <ColoredLine color={"white"} width={"85%"} margin={"0.5rem"}/>
            <h6>&copy; 2024 Franz Luiz Sy</h6>
        </div>
    );
}