import React from 'react';
import styles from './home.module.scss';
import heroImage from '../../assets/svg/Logosvg.svg';
import instagramIcon from '../../assets/svg/Instagram Old.svg';
import tiktokIcon from '../../assets/svg/TikTok.svg';
import xIcon from '../../assets/svg/TwitterX.svg';
import facebookIcon from '../../assets/svg/Facebook.svg';
import feeImage from '../../assets/svg/howitworkssvg.svg';

const Home: React.FC = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles['flex-container']}>
        <h2 className={styles['home-heading']}>
          YOUR FULL SERVICE FLORIST <br />
          FOR EVERY OCCASION
        </h2>
        <div className={styles['social-icons-container']}>
        {/* Individual social icons */}
        <img src={instagramIcon} alt="Instagram" className={styles['social-icon']} />
        <img src={tiktokIcon} alt="TikTok" className={styles['social-icon']} />
        <img src={xIcon} alt="X" className={styles['social-icon']} />
        <img src={facebookIcon} alt="Facebook" className={styles['social-icon']} />
      </div>
      </div>

      {/* Add other content as needed */}

    

      {/* How it Works section */}
      <div className={styles['how-it-works-container']}>
        <h3 className={styles['how-it-works-heading']}>HOW IT WORKS ?</h3>
        <button className={styles['how-it-works-button']}>SHOP NOW</button>
        <img src={feeImage} alt="Fee" className={styles['feeImage']} />
      </div>
    </div>
  );
};

export default Home;
