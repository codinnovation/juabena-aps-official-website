import React from "react";
import styles from "../../styles/about/about-home.module.css";
import Image from "next/image";
import AboutImage from "../../../public/student-bg.jpg";
import PlayIcon from "@mui/icons-material/PlayArrow";

function Index() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <div className={styles.aboutHeaderContent}>
            <h1>Juaben APS</h1>
            <h1>About Us</h1>
            <div className={styles.aboutImageContainer}>
              <Image
                src={AboutImage}
                alt="about-mg"
                className={styles.aboutImg}
              />
            </div>
          </div>

          <div className={styles.description}>
            <div className={styles.header}>
              <h1>Best Tranning Language School</h1>
            </div>

            <div className={styles.des}>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a pageIt is a long established fact
                that a reader will be distracted by the readable content of a
                page...
              </p>
            </div>

            <div className={styles.cta}>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
