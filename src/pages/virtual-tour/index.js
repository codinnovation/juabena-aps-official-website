import React from "react";
import styles from "../../styles/virtual-tour.module.css";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Photo2 from "../../../public/student2.jpg";
import Photo3 from "../../../public/student3.jpg";
import Photo4 from "../../../public/student4.jpg";

function Index() {
  return (
    <>
      <div className={styles.photoContainer}>
        <div className={styles.photoContent}>
          <div className={styles.header}>
            <h1>Photo Gallery</h1>
            <h1>See Our Students in Action</h1>
          </div>

          <div className={styles.photoGrid}>
            <div className={styles.photo}>
              <Image
                src={Photo3}
                alt="student-photo"
                className={styles.img}
              />
              <p>When they were learning</p>
            </div>

            <div className={styles.photo}>
              <Image
                src={Photo2}
                alt="student-photo"
                className={styles.img}
              />
              <p>When they were learning</p>
            </div>

            <div className={styles.photo}>
              <Image
                src={Photo3}
                alt="student-photo"
                className={styles.img}
              />
              <p>When they were learning</p>
            </div>

            <div className={styles.photo}>
              <Image
                src={Photo4}
                alt="student-photo"
                className={styles.img}
              />
              <p>When they were learning</p>
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
