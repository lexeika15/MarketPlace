import styles from './Footer.module.css';
import vkIcon from './assets/vkIcon.png';
import instagramIcon from './assets/instagramIcon.png';
import facebookIcon from './assets/facebookIcon.png';
import googlePlayIcon from './assets/googlePlayIcon.png';
import appStoreIcon from './assets/appStoreIcon.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>React</div>
        <div className={styles.footerSectionsWrapper}>
          <div className={styles.footerSection}>
            <h4>Присоединяйтесь к нам</h4> 
            <div className={styles.socialIcons}>
              <a href="#"><img src={facebookIcon} alt="Facebook"/></a>
              <a href="#"><img src={vkIcon} alt="VK"/></a>
              <a href="#"><img src={instagramIcon} alt="Instagram"/></a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Устанавливайте приложение</h4>
            <div className={styles.storeButtons}>
              <a href="#"><img src={googlePlayIcon} alt="Google Play"/></a>
              <a href="#"><img src={appStoreIcon} alt="App Store"/></a>
            </div>
          </div>
        </div>
      </div> 

      <div className={styles.footerBottom}>
        <span>@Sonic</span>
        <a href="#">Правовая информация</a>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}

export default Footer;