import React from "react";
import style from "../../Header.module.css";

function Header() {
  return (
    <header className={style.hContainer}>
      <div className={style.moduleContainer}>
        <div className={style.headerContainer}>
          <div className={style.headerCol1}>
            <div className={style.logoModule}>
              <div className={style.logo}>
                <img src="./apple-touch-icon.png" alt="logo" width={50} style={{display:'block', overflow:'visible !important', transform: 'scale(1) translateZ(0)', cursor:'pointer'}} />
              </div>
              <div className={style.logoName}>
                <h2>Emma <span className={style.Nuel}>Nuel</span></h2>
              </div>
            </div>
            <div className={style.headerCol2}>
              <div className={style.headerMenu}>
                <nav className={style.navMenu}>
                  <ul className={style.menuList}>
                    <li className={style.menuItem}>
                      <a className={style.menuLink} aria-current="page" href="/">
                       Home
                      </a>
                      
                    </li>
                    <li className={style.menuItem}>
                      <a className={style.menuLink} aria-current="page" href="/">
                        Portfolio
                      </a>

                    </li>
                    <li className={style.menuItem}>
                      <a className={style.menuLink} aria-current="page" href="/">
                        About
                      </a>

                    </li>
                    <li className={style.menuItem}>
                      <a className={style.menuLink} aria-current="page" href="/">
                        Testimonials
                      </a>

                    </li>
                    <li className={style.menuItem}>
                      <a className={`${style.menuLink} ${style.menuLinkButton}`} aria-current="page" href="/">
                        Get In Touch
                      </a>

                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
