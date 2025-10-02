import styles from './CartContent.module.css';
import shoppingBagIcon from './assets/shoppingBagIcon.png';
import badgeIcon from './assets/badgeIcon.png';
import cartIcon from './assets/cartIcon.png';
import deleteIcon from './assets/deleteIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromCart, clearCart } from '../../../store/cartSlice';

function CartContent() {

  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className={styles.cart}>
      <div className={styles.header}>
        <h1 className={styles.cartHeaderTitle}>Корзина</h1>
        <button 
          className={styles.cartHeaderClear}
          onClick={() => dispatch(clearCart())}
        >
          Очистить корзину
        </button>
      </div>

      <div className={styles.cartWrapper}>
        <div className={styles.cartSummary}>
          <span className={styles.brandName}>Xiaomi</span>
          <div className={styles.total}>
            <span className={styles.cartTotalLabel}>Стоимость корзины:</span>
            <span className={styles.cartTotalValue}>
              {total.toLocaleString("ru-RU", {style: "currency", currency: "RUB"})}
            </span>  
          </div>

          <button className={styles.cartCheckout}>Оформить</button>
          <div className={styles.images}>
            <img src={shoppingBagIcon} className={styles.shoppingBagIcon} alt="shoppingBagIcon" />
            <img src={badgeIcon} className={styles.badgeIcon} alt="badgeIcon" />
            <img src={cartIcon} className={styles.cartIcon} alt="cartIcon" />
          </div>
        </div>

        <div className={styles.cartItems}>
          {items.length === 0 && <p>Корзина пуста</p>}

          {items.map(item => (
            <article key={`${item.id}-${item.selectedSize}`} className={styles.cartItem}>
              <img src={item.image} className={styles.productImage} alt="deleteIcon" />
              <div className={styles.cartItemInfo}>
                <h2 className={styles.cartItemName}>{item.name}</h2>
                <p className={styles.cartItemSpecs}>{item.selectedSize}</p>  
              </div>

              <div className={styles.cartItemQuantity}>
                <button 
                  className={styles.quantityButton}
                  onClick={() => dispatch(decreaseQuantity({ id: item.id, selectedSize: item.selectedSize }))}
                >
                  -
                </button>
                <span className={styles.quantityValue}>{item.quantity}</span>
                <button 
                  className={styles.quantityButton}
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>

              <div className={styles.cartItemPrice}>
                <span className={styles.cartItemPriceValue}>
                  {(item.price * item.quantity).toLocaleString("ru-RU",{style: "currency", currency: "RUB"})}
                </span>
                
                <span className={styles.cartItemPriceOld}>
                  {(item.oldPrice * item.quantity).toLocaleString("ru-RU",{style: "currency", currency: "RUB"})}
                </span>
              </div>
            
              <img 
                src={deleteIcon} 
                className={styles.cartIconRemove} 
                alt="deleteIcon" 
                onClick={() => dispatch(removeFromCart({ id: item.id, selectedSize: item.selectedSize }))}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CartContent;