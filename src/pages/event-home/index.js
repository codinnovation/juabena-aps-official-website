import React from "react";
import styles from "../../styles/event-home.module.css";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Photo2 from "../../../public/student2.jpg";
import Photo3 from "../../../public/student3.jpg";
import Photo4 from "../../../public/student4.jpg";

function Index() {
  return (
    <>
      <div className={styles.eventContainer}>
        <div className={styles.eventContent}>
          <div className={styles.header}>
            <h1>What&apos;s Happening</h1>
            <h1>Mark Your Calendar for These Special Moments</h1>
          </div>

          <div className={styles.eventGrid}>
            <div className={styles.photo}>
              <Image
                src={Photo3}
                alt="student-photo"
                className={styles.img}
              />
              <p>When they were learning</p>
              <button>Read More</button>

            </div>

            <div className={styles.photo}>
              <Image
                src={Photo2}
                alt="student-photo"
                className={styles.img}
              />
              <p>When they were learning</p>
              <button>Read More</button>
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
      </div>
    </>
  );
}

export default Index;
