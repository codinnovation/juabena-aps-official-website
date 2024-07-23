import React, { useState, useEffect } from "react";
import styles from "../../styles/our-program.module.css";
import CalenderIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import Person from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import courses from "../../../courses";

function Index() {
  const item_per_page = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if ((currentPage + 1) * item_per_page < courses.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * item_per_page;
  const endIndex = startIndex + item_per_page;
  const visibleCourses = courses.slice(startIndex, endIndex);

  return (
    <>
      <div className={styles.startContainer}>
        <div className={styles.startHeaders}>
          <h1>Explore Our Programs</h1>
          <h1>Where Every Child&apos;s Potential is Unlocked</h1>
        </div>

        <div className={styles.cardGrid}>
          {visibleCourses.map((data, index) => (
            <div className={styles.cardContainer} key={index}>
              <div className={styles.iconContainer}>
                <SchoolIcon className={styles.icon} />
              </div>

              <div className={styles.cardName}>
                <h1>{data?.title}</h1>
              </div>
              <div className={styles.cardNameTag}>
                <p>{data?.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.btnAction}>
          <div className={styles.btn1} onClick={handlePrev}>
            <ArrowBackIcon />
          </div>

          <div className={styles.btn1} onClick={handleNext}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
