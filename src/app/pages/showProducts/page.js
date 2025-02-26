import styles from "@/app/page.module.css";
// import {Header, Footer, ColoredLine} from "@components/*";
import  Header  from "@components/Header";
import Footer from "@components/Footer";
import ColoredLine from "@components/ColoredLine";

export default function ShowProducts() {
  
  return (
    <main className={styles.main}>
        <Header/>
        
      <div className={styles.centerElement}>
        <div id="buttonDiv" className={styles.buttonDiv}>
            <button className={styles.button}>Dry Food Products</button>
            <button className={styles.button}>Wet Food Products</button>
            <button className={styles.button}>Treat Products</button>
            <button className={styles.button}>Dental Products</button>
            <button className={styles.button}>Wellness Products</button>
        </div>
      </div>

      <div id="footerDiv" className={styles.footer}>
        <h6 style={{color: "#C1363C"}}>Contact for Cease and Desist</h6>
        <ColoredLine color={"white"} width={"85%"} margin={"0.5rem"}/>
        <h6>&copy; 2024 Franz Luiz Sy</h6>
      </div>
    
    <Footer />
    </main>
  );
}