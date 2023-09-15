import React from 'react';
import style from '../../Main.module.css'

function Main() {
  return (
      <main id='content' className={style.content}>
          <div className={style.contentModule}>
              <div className={style.contentHeader}>
                  <h1 className={`${style.blockCenter} ${style.h1}`}>From Code to Creativity: My Front-end Odyssey</h1>
                  <p className={`${style.subtitle} `}>
                      Hello, I'm <span style={{color:'#008ccf'}}>Emmanuel</span> a Front-end Developer,<br></br> I'm on a mission to deliver outstanding digital solutions that leave a lasting impression.
                   
                  </p>
              </div>
              <div id='services' className={style.services}>
                  <h2 className={style.h2}>My Services</h2>
                  <div className={style.serviceContainer}>
                      <div className={style.cardContainer}>
                          <div className={style.serviceCard}>
                              <img src='./frontend.jpg' alt='frontend developer' width={250} height={250} style={{borderRadius:'15px'}} />
                              <div className={style.cardDetail}>
                                  <h3 style={{color:'orange', padding:'10px', fontSize:'1.5rem'}}>Frontend development</h3>
                                  <p style={{fontSize:'1.2rem'}}>
                                      Responsive web applications built for an optimal user experience that achieves your business goals.
                                  </p>
                              </div>
                          </div>
                          <div className={style.serviceCard}>
                              <img src='./SEO.jpg' alt='analytics' width={250} height={250} style={{borderRadius:'15px'}}/>
                              <div className={style.cardDetail}>
                                  <h3 style={{color:'orange', padding:'10px', fontSize:'1.5rem' }}>Performance, SEO, and accessibility testing</h3>
                                  <p style={{fontSize:'1.2rem'}}>
                                      Make your application fast, easy to find, and reach the widest audience possible.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <hr style={{ marginTop:'0.6rem' }} />
                  </div>
              </div>
          </div>
         
    </main>
  )
}

export default Main