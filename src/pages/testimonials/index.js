import React, { useState, useEffect } from "react";
import styles from "../../styles/testimonial.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { db } from "../../../firebase.config";
import { ref, get } from "firebase/database";

function Index() {
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "testimonials");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setTestimonialData(dataArray);
        } else {
          setTestimonialData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTestimonialData([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [testimonialData.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const currentTestimonial = testimonialData[currentIndex] || {};

  return (
    <>
      <div className={styles.testimonialContainer}>
        <div className={styles.header}>
          <h1>Hear from Our Community</h1>
          <p>Real Stories from Our Happy Parents and Students</p>
        </div>

        <div className={styles.messageContainer}>
          <div className={styles.messageHeader}>
            <h1>{currentTestimonial.name || "Anonymous"}</h1>
          </div>

          <div className={styles.message}>
            <p>{currentTestimonial.message || "No testimonial available."}</p>
          </div>

          <div className={styles.quoteIconContainer}>
            <FormatQuoteIcon className={styles.quoteIcon} />
          </div>
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
