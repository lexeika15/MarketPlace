import styles from './CartContent.module.css';
import shoppingBagIcon from './assets/shoppingBagIcon.png';
import badgeIcon from './assets/badgeIcon.png';
import cartIcon from './assets/cartIcon.png';
import deleteIcon from './assets/deleteIcon.png';

function CartContent() {

  return (
    <main className={styles.cart}>
      <div className={styles.header}>
        <h1 className={styles.cartHeaderTitle}>Корзина</h1>
        <button 
          className={styles.cartHeaderClear}
        >
          Очистить корзину
        </button>
      </div>

      <div className={styles.cartWrapper}>
        <div className={styles.cartSummary}>
          <span className={styles.brandName}>Xiaomi</span>
          <div className={styles.total}>
            <span className={styles.cartTotalLabel}>Стоимость корзины:</span>
            <span className={styles.cartTotalValue}></span>  
          </div>

          <button className={styles.cartCheckout}>Оформить</button>
          <div className={styles.images}>
            <img src={shoppingBagIcon} className={styles.shoppingBagIcon} alt="shoppingBagIcon" />
            <img src={badgeIcon} className={styles.badgeIcon} alt="badgeIcon" />
            <img src={cartIcon} className={styles.cartIcon} alt="cartIcon" />
          </div>
        </div>

        <div className={styles.cartItems}></div>
      </div>
    </main>
  );
}

export default CartContent;