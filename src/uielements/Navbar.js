import React from 'react';
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import './Navbar.css';
import { useState } from 'react';
import NavLinks from './NavLinks';
import MenuIcon from "@mui/icons-material/Menu";
function Navbar(props) {
 const [navbar, toggleNavbar] = useState(false);
 const [drawerIsOpen, setDrawerIsOpen] = useState(false);

 const openDrawerHandler = () => {
   setDrawerIsOpen(true);
 };

 const closeDrawerHandler = () => {
   setDrawerIsOpen(false);
 };
  
  const changeNav = () => {
    if (window.scrollY >= 15) toggleNavbar(true);
    else toggleNavbar(false);
  };
  window.addEventListener('scroll', changeNav);
  return (
    <> 
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
       <SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen}>
        <nav className="nav-drawer">
          <NavLinks />
        </nav>
      </SideDrawer> 
      <header
        className={navbar ? 'main-header main-header-fixed' : 'main-header'}
      > 

        <div className='nav-items-container'> 
        <button className="side-drawer-button" onClick={openDrawerHandler}>
          <MenuIcon />
        </button>
          <div className='nav-brand'>
            <div className='group-796'>
              <div className='group-795'>
                <div className='vector-container'>
                  <img
                    className='vector-2' 
                    alt="logo1"
                    src='https://anima-uploads.s3.amazonaws.com/projects/62361f57ec7f94c8a6fb1a08/releases/62361f6c405fa29606a3205d/img/vector-2@2x.svg'
                  />
                  <img
                    className='vector-3' 
                    alt="logo2"
                    src='https://anima-uploads.s3.amazonaws.com/projects/62361f57ec7f94c8a6fb1a08/releases/62361f6c405fa29606a3205d/img/vector-3@2x.svg'
                  />
                </div>
              </div>
              <div className='brand-title'>Le Paisa</div>
            </div>
          </div>
          <nav className='main-navigation__header-nav'> 
           <NavLinks />     
          </nav>
        </div>
      </header>
    </>
  );
}


export default Navbar;
