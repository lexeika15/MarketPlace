import styles from './RightSidebar.module.css';
import handbagsDiscount from './assets/handbagsDiscount.png';

function RightSidebar () {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.promoCard}>
        <img src={handbagsDiscount} alt="Discount" className={styles.promoImage} />
        <div className={styles.promoContent}>
          <h3 className={styles.promoTitle}>Получай товары БЕСПЛАТНО!</h3>
          <button className={styles.promoButton}>Узнать подробнее</button>    
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;