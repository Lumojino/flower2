// Import necessary modules
import React, { useState, useEffect, useRef } from "react";
import styles from "../nav/nav.module.scss";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import closeIcon from '../../assets/svg/Cancel.svg';
import homeLogo from "../../assets/svg/Logosvg.svg";
import shopIcon from "../../assets/svg/Shopping Cart.svg";

// Define your Nav component
const Nav: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const menuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth <= 450);
      if (window.innerWidth > 450) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      (menuRef.current && !menuRef.current.contains(event.target as Node)) &&
      (burgerRef.current && !burgerRef.current.contains(event.target as Node))
    ) {
      setShowMenu(false);
    }
  };

  const handleBurgerClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCloseIconClick = () => {
    setShowMenu(false);
  };

  // Function to determine if a link is active
  const isLinkActive = (pathname: string) => location.pathname === pathname;

  return (
    <nav className={styles.nav}>
      <RouterLink to="/" className={styles["logo-link"]}>
        <img src={homeLogo} alt="Home" className={styles["home-logo"]} />
      </RouterLink>

      {showBurger && (
        <div ref={burgerRef} className={styles["burger-icon"]} onClick={handleBurgerClick}>
          ☰
        </div>
      )}

      <div ref={menuRef} className={`${styles["nav-links"]} ${showMenu ? styles.active : ""}`}>
        <RouterLink
          to="/store"
          className={`${styles["nav-link"]} ${isLinkActive("/store") ? styles.active : ""}`}
          onClick={handleLinkClick}
        >
          STORE
        </RouterLink>
        <RouterLink
          to="/contact"
          className={`${styles["nav-link"]} ${isLinkActive("/contact") ? styles.active : ""}`}
          onClick={handleLinkClick}
        >
          CONTACT US
        </RouterLink>
      </div>

      {showMenu && (
        <div className={styles["dropdown-menu"]}>
          <div className={styles["close-icon"]} onClick={handleCloseIconClick}>
            <img src={closeIcon} alt="Close" style={{ width: '30px' }} />
          </div>
          <RouterLink
            to="/store"
            className={`${styles["nav-link"]} ${isLinkActive("/store") ? styles.active : ""}`}
            onClick={handleLinkClick}
          >
            STORE
          </RouterLink>
          <RouterLink
            to="/contact"
            className={`${styles["nav-link"]} ${isLinkActive("/contact") ? styles.active : ""}`}
            onClick={handleLinkClick}
          >
            CONTACT US
          </RouterLink>
        </div>
      )}

      <RouterLink to="/shop" className={styles["shop-icon-link"]}>
        <img src={shopIcon} alt="Shop" className={styles["shop-icon"]} />
      </RouterLink>
    </nav>
  );
};

export default Nav;
