import React, { useState, useEffect } from "react";
import styles from "../../styles/showcase.module.css";
import Image from "next/image";
import ShowCaseImage from "../../../public/logo2.png";
import Link from "next/link";
import Person from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { db } from "../../../firebase.config";
import { ref, get } from "firebase/database";

function Index() {
  const [showcaseData, setShowcaseData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState("fadeIn");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "showcaseDescriptions");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setShowcaseData(dataArray);
        } else {
          setShowcaseData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setShowcaseData([]);
      }
    };

    // Delay fetching data by 3 seconds
    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showcaseData.length > 0) {
      const interval = setInterval(() => {
        setFade("fadeOut");
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseData.length);
          setFade("fadeIn");
        }, 1000);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [showcaseData]);

  const currentShowcase = showcaseData[currentIndex] || {};

  return (
    <>
      <div className={styles.showcaseContainer}>
        <div className={styles.backImage}>
          <div className={`${styles.descriptions} ${styles[fade]}`}>
            <div className={styles.descriptionsTagLine}>
              <p>{currentShowcase.descriptionsTagLine || "Adventist School"}</p>
            </div>

            <div className={styles.mainTagline}>
              <h1>{currentShowcase.mainTagline1 || "Welcome,"}</h1>{" "}
              <h1>
                {currentShowcase.mainTagline2 ||
                  "Nana Akosuah Akyamah Adventist Preparatory School"}
              </h1>
            </div>

            <div className={styles.cta}>
              <button>{currentShowcase.cta || "Learn More"}</button>
            </div>
          </div>
        </div>

        <div className={styles.showcaseNavigation}>
          <div className={styles.navigationContent}>
            <div className={styles.logoContainer}>
              <Image
                src={ShowCaseImage}
                alt="juaben-aps-logo"
                className={styles.img}
              />
              <p>Juaben APS</p>
            </div>

            <div className={styles.navigationLinks}>
              <div className={styles.link}>
                <Link href="/" className={styles.a}>
                  Home
                </Link>
              </div>

              <div className={styles.link}>
                <Link href="/" className={styles.a}>
                  About
                </Link>
              </div>

              <div className={styles.link}>
                <Link href="/" className={styles.a}>
                  Services
                </Link>
              </div>

              <div className={styles.link}>
                <Link href="/" className={styles.a}>
                  Events
                </Link>
              </div>

              <div className={styles.link}>
                <Link href="/" className={styles.a}>
                  Contact
                </Link>
              </div>
            </div>

            <div className={styles.userActions}>
              <Person className={styles.userIcon} />
              <h1>Login/Sign Up</h1>
            </div>

            <div className={styles.menuIconContainer}>
              <MenuIcon
                className={styles.menuIcon}
                onClick={() => setOpenMenu((prev) => !prev)}
              />
            </div>

            {openMenu && (
              <>
                <div className={styles.menuContainer}>
                  <div className={styles.menuLinks}>
                    <div className={styles.link}>
                      <Link href="/" className={styles.a}>
                        Home
                      </Link>
                    </div>

                    <div className={styles.link}>
                      <Link href="/" className={styles.a}>
                        About
                      </Link>
                    </div>

                    <div className={styles.link}>
                      <Link href="/" className={styles.a}>
                        Services
                      </Link>
                    </div>

                    <div className={styles.link}>
                      <Link href="/" className={styles.a}>
                        Events
                      </Link>
                    </div>

                    <div className={styles.link}>
                      <Link href="/" className={styles.a}>
                        Contact Us
                      </Link>
                    </div>

                    <div className={styles.link}>
                      <Link href="/" className={styles.login}>
                        Login/Signup{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
