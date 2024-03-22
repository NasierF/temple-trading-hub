//import Image from "next/image";
import  styles from "./Styles/Landing.module.css";
import "./Styles/global.css";
import Topbar from "./components/Topbar";
//import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';


  function Hub(){
    return(
      <main className={styles.Hello}>
        <Topbar />
       
        <div className={styles.display_demo}></div>
       
      </main>
    );
  }



export default Hub;
