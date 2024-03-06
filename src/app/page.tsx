//import Image from "next/image";
//import styles from "./page.module.css";
import  styles from "./Styles/page.module.css";
import "./Styles/global.css";
import Topbar from "./components/Topbar";
//import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';


  function Hub(){
    return(
      <main className={styles.Hello}>
        <Topbar />
        <h1>Temple Trading Hub :)</h1>
       
      </main>
    );
  }



export default Hub;
