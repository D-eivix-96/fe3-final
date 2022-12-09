import React from 'react';
import styles from "./Footer.module.css";
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';


const Footer = () => {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false;

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={`${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                <img className={`${isDarkMode ? styles.iconsDark : ''} ${styles.dhLogo}`} src="/images/DH.png" alt='DH-logo' />
              </div>
              <div className={`col-sm-12 col-lg-6 ${isDarkMode ? styles.iconsDark : ''} ${styles.icons}`}>
                <img src="/images/ico-facebook.png" alt="icono facebook" className={styles.icon} />
                <img src="/images/ico-instagram.png" alt="icono instagram" className={styles.icon} />
                <img src="/images/ico-whatsapp.png" alt="icono whatsapp" className={styles.icon} />
                <img src="/images/ico-tiktok.png" alt="icono tiktok" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer >
  )
};

export default Footer
