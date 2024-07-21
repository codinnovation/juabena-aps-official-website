import React from "react";
import styles from "../../styles/showcase.module.css";
import Image from "next/image";
import ShowCaseImage from "../../../public/logo2.png";
import Link from "next/link";
import Person from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

function Index() {
  return (
    <>
      <div className={styles.showcaseContainer}>
        <div className={styles.backImage}>
          <div className={styles.descriptions}>
            <div className={styles.descriptionsTagLine}>
              <p>Adventist School</p>
            </div>

            <div className={styles.mainTagline}>
              <h1>Welcome,</h1>
              <h1>Nana Akosuah Akyamah Adventist Preporatory School</h1>
            </div>

            <div className={styles.cta}>
              <button>Learn More</button>
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
                  Contact Us
                </Link>
              </div>
            </div>

            <div className={styles.userActions}>
              <Person className={styles.userIcon} />
              <h1>Login/Sign Up</h1>
            </div>

            <div className={styles.menuIconContainer}>
              <MenuIcon className={styles.menuIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
