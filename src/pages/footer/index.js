import React from "react";
import styles from "../../styles/footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import X from "@mui/icons-material/X";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Phone from "@mui/icons-material/Phone";

function Index() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.socialMediaIcons}>
            <div className={styles.header}>
              <h1>Contact Us</h1>
            </div>

            <div className={styles.socialIcons}>
              <FacebookIcon className={styles.icon} />
              <X className={styles.icon} />
              <WhatsApp className={styles.icon} />
              <LinkedIn className={styles.icon} />
              <Phone className={styles.icon} />
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={styles.lastSection}>
            <p>
              &copy;{new Date().getFullYear()} - Juaben APS | All Rights
              Reserved
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
