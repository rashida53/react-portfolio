import React from "react";
import '../styles/Navbar.css'

const styles = {
   linkItems: {
      color: 'white',
      fontSize: 'x-large',
      fontWeight: '700',
   },
   navBar: {
      justifyContent: 'center',
      // position: 'absolute',
      borderBottom: 'solid 1px #01f9c6',
      width: '100%',
      backgroundColor: 'black',
      top: '0',
      diplay: 'flex'
   }
}

function Navbar({ currentPage, handlePageChange }) {
   return (
      <div>
         <nav style={styles.navBar} className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <a style={styles.linkItems} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                     href="#about"
                     onClick={() => handlePageChange('About')}
                  >About</a>
               </li>
               <li className="nav-item">
                  <a style={styles.linkItems} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                     href="#portfolio"
                     onClick={() => handlePageChange('Portfolio')}
                  >Portfolio</a>
               </li>
               <li className="nav-item">
                  <a style={styles.linkItems} className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                     href="#skills"
                     onClick={() => handlePageChange('Skills')}
                  >Skills</a>
               </li>
               <li className="nav-item">
                  <a style={styles.linkItems} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                     href="#resume"
                     onClick={() => handlePageChange('Resume')}
                  >Resume</a>
               </li>
               <li className="nav-item">
                  <a style={styles.linkItems} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                     href="#contact"
                     onClick={() => handlePageChange('Contact')}
                  >Contact</a>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navbar;