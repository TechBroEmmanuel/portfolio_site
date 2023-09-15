import React from "react";
import style from "../../FeaturedWork.module.css";

function FeaturedWork() {
  return (
    <>
      <div id="featuredWork" className={style.worksSection}>
        <div className={style.workModule}>
          <div className={style.workHeader}>
            <h2 className={style.h2}>Featured projects</h2>
          </div>
          <div className={style.portfolioModule}>

            <div className={style.proj2}>
              <diV className={style.projectDesc}>
                <div className={style.urlButton}>
                  <button style={{ height: '3rem' }}>
                    <a href="https://external.mtnncoveragelocator.com/" style={{ textDecoration: 'none', fontSize: '1rem', color: '#fff', fontWeight: '400' }}>MTNN Coverage Locator</a>
                  </button>
                </div>
                <div className={style.mainDesc}>
                  <p>The MTNN coverage locator is designed just for you, to effortlessly find network coverage signal levels on a map by searching any address. Plus, you can personally report areas with weak or no coverage and notify MTNN about network outages, so they can make your experience even better.</p>
                </div>
              </diV>
              <diV className={style.projectPNG}>
                <div className={style.png1}>
                  <img src="./mtnCL.png" alt="external coverage locator" width={600} height={200} />
                </div>
                <div className={style.png2}>
                  <img src="./internalCL.png" alt="CMS" width={600} height={200} />
                </div>
              </diV>
            </div>
            <div className={style.proj1}>
              <diV className={style.projectDesc}>
                <div className={style.urlButton}>
                  <button style={{ height: '3rem' }}>
                    <a href="https://real-estate-site-phi.vercel.app/" style={{ textDecoration: 'none', fontSize: '1rem', color: '#fff', fontWeight: '700' }}>HavenHunt Estate</a>
                  </button>
                </div>
                <div className={style.mainDesc}>
                  <p>This project demonstrates my ability to create a feature-rich, responsive, and user-friendly web application using React.js. By combining the Pixabay API with modern UI components and integrating popular messaging platforms like WhatsApp, I aimed to showcase my skills in API integration and user interface design.</p>
                </div>
              </diV>
              <diV className={style.projectPNG}>
                <div className={style.png1}>
                  <img src="./HavenHunt.png" alt="HavenHunt" width={600} height={200} />
                </div>
                <div className={style.png2}>
                  <img src="./HavenHunt2.png" alt="get started" width={600} height={200} />
                </div>
              </diV>
            </div>
            <div className={style.proj3}>
              <diV className={style.projectDesc}>
                <div className={style.urlButton}>
                  <button style={{ height: '3rem' }} title="View Source Code on Github">
                    <a href="https://github.com/TechBroEmmanuel/CRUD-Emp_management_system" style={{ textDecoration: 'none', fontSize: '1rem', color: '#fff', fontWeight: '700' }}>Employees Management System</a>
                  </button>
                </div>
                <div className={style.mainDesc}>
                  <p>Unlock the power of streamlined workforce management with our Employee Management System. Designed to simplify HR operations, our system empowers businesses to efficiently manage their employees' data, ensuring a seamless and organized HR workflow.</p>
                </div>
              </diV>
              <diV className={style.projectPNG}>
                <div className={style.png1}>
                  <img src="./Emp1.png" alt="Employee dashboard" width={600} height={200} />
                </div>
                <div className={style.png2}>
                  <img src="./Emp2.png" alt="get started" width={600} height={200} />
                </div>
              </diV>
            </div>
            <hr style={{ marginTop: '2rem' }} />
          </div>
        </div>

        <div className={style.getInTouch}>

          <button className={style.button}><a href="contact" className={style.href}>Get In Touch</a></button>
        </div>
      </div>
      
    </>
  );
}

export default FeaturedWork;
