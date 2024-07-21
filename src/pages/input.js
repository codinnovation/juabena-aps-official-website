import React, {useState, useEffect} from 'react'
import { db } from "../../firebase.config";
import { ref, push } from "firebase/database";
import styles from '../styles/Home.module.css'

function Input() {
   const [formData, setFormData] = useState({
      name: "",
      message: "",
    });

    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const newStudentRef = push(ref(db, "testimonials"), formData);
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
                <label>mainTagline1</label>
                <input
                  value={formData.name}
                  name="name"
                  placeholder=""
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>message</label>
                <input
                  value={formData.message}
                  name="message"
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
