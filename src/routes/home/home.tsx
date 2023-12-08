import React from 'react';
import styles from './home.module.scss';
import heroImage from '../../assets/svg/Logosvg.svg';
import instagramIcon from '../../assets/svg/Instagram.svg';
import tiktokIcon from '../../assets/svg/TikTok.svg';
import xIcon from '../../assets/svg/TwitterX.svg';
import facebookIcon from '../../assets/svg/Facebook.svg';
import feeImageLarge from '../../assets/videos/Animation (1).webm';
import feeImageSmall from '../../assets/svg/howitworkssvg.svg';

const Home: React.FC = () => {
  // Determine the resolution and choose the appropriate feeImage
  const isLargeResolution = window.innerWidth > 450;
  const FeeImageComponent = isLargeResolution ? FeeVideo : FeeImage;

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
        <FeeImageComponent />
      </div>
    </div>
  );
};

const FeeImage: React.FC = () => (
  <img src={feeImageSmall} alt="Fee" className={styles['feeImage']} />
);

const FeeVideo: React.FC = () => (
  <video className={styles['feeVideo']} autoPlay loop muted>
    <source src={feeImageLarge} type="video/webm" />
    Your browser does not support the video tag.
  </video>
);

export default Home;
