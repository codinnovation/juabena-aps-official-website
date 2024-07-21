import React from "react";
import styles from "../../styles/our-program.module.css";
import CalenderIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School"
import Person from "@mui/icons-material/Person";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Index() {
  return (
    <>
      <div className={styles.startContainer}>
        <div className={styles.startHeaders}>
          <h1>Explore Our Programs</h1>
          <h1>Where Every Child&apos;s Potential is Unlocked</h1>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>
              <CalenderIcon className={styles.icon} />
            </div>

            <div className={styles.cardName}>
              <h1>An Easy Study Approach</h1>
            </div>
            <div className={styles.cardNameTag}>
              <p>Nursery 1 to Class 6</p>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>
              <SchoolIcon className={styles.icon} />
            </div>

            <div className={styles.cardName}>
              <h1>Free
              Teaching Materials</h1>
            </div>
            <div className={styles.cardNameTag}>
              <p>Class 1 to Class 6</p>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>
              <Person className={styles.icon} />
            </div>

            <div className={styles.cardName}>
              <h1>An Easy Study Approach</h1>
            </div>
            <div className={styles.cardNameTag}>
              <p>Class 1 to KG 6</p>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>
              <CalenderIcon className={styles.icon} />
            </div>

            <div className={styles.cardName}>
              <h1>An Easy Study Approach</h1>
            </div>

            <div className={styles.cardNameTag}>
              <p>Class 1 to Class 6</p>
            </div>
          </div>
        </div>

        <div className={styles.btnAction}>
          <div className={styles.btn1}>
            <ArrowBackIcon/>
          </div>

          <div className={styles.btn1}>
            <ArrowForwardIcon/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
