import React, {useState, useEffect} from 'react'
import { db } from "../../firebase.config";
import { ref, push } from "firebase/database";
import styles from '../styles/Home.module.css'

function Input() {
   const [formData, setFormData] = useState({
      descriptionsTagLine: "",
      mainTagline1: "",
      mainTagline2: "",
      cta: "",
    });

    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const newStudentRef = push(ref(db, "showcaseDescriptions"), formData);
        const newStudentKey = newStudentRef.key;
        return newStudentKey;
      } catch (error) {
        console.error("Error submitting Student:");
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
  return (
    <>
     <div>
     <div className={styles.container_items}>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.field}>
                <label>descriptionsTagLine</label>
                <input
                  value={formData.descriptionsTagLine}
                  name="descriptionsTagLine"
                  placeholder="your name goes here..."
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>mainTagline1</label>
                <input
                  value={formData.mainTagline1}
                  name="mainTagline1"
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>mainTagline2</label>
                <input
                  value={formData.mainTagline2}
                  name="mainTagline2"
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>cta</label>
                <input
                  value={formData.cta}
                  name="cta"
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.container_button}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
      </div> 
    </>
  )
}

export default Input
