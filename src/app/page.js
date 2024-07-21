import DisplayImage from "./components/logo";
import ColoredLine from "./components/coloredLine";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.centerElement}> 
          <DisplayImage imageAddr={"/images/PV_logo_transparent.png"} altText={"PetValu Logo"}/> 
        </div>
        
        <div className={styles.subHeadingDiv}>
            <div className={styles.centerElement}>
              <p style={{fontSize: "0.95rem"}}> <span style={{color: "#C1363C"}}>Unofficial</span>
              <span> Product-Expiry Tracker&#8482;</span>
              </p>
            </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h6 style={{color: "#C1363C"}}>Contact for Cease and Desist</h6>
        <ColoredLine color={"white"} width={"85%"} margin={"5"}/>
        <h6>&copy; 2024 Franz Luiz Sy</h6>
      </div>
    </main>
  );
}
