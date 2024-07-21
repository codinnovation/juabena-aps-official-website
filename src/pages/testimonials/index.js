import React from "react";
import styles from "../../styles/testimonial.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function Index() {
  return (
    <>
      <div className={styles.testimonialContainer}>
        <div className={styles.header}>
          <h1>Hear from Our Community</h1>
          <p>Real Stories from Our Happy Parents and Students</p>
        </div>

        <div className={styles.messageContainer}>
          <div className={styles.messageHeader}>
            <h1>Kwabena Asumadu</h1>
          </div>

          <div className={styles.message}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable cIt is a long established fact that a reader will be
              distracted by the readable{" "}
            </p>
          </div>

          <div className={styles.quoteIconContainer}>
            <FormatQuoteIcon className={styles.quoteIcon} />
          </div>
        </div>

        <div className={styles.btnAction}>
          <div className={styles.btn1}>
            <ArrowBackIcon />
          </div>

          <div className={styles.btn1}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
