import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import searchIcon from './assets/search-icon.png';
import cartIcon from './assets/cart-icon.png';
import headerAvatar from './assets/header-avatar.png';

function Header() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items);

  const handleSearch = (inputValue) => {
    const trimmed = inputValue.trim();
    if(trimmed)
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
    else
      navigate(`/products`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.logo}>React</span>
        <a href="#orders" className={styles.orders}>История заказов</a>
      </div>

      <div className={styles.center}>
        <div className={styles.searchWrapper}>
          <input 
          type="text"
          className={styles.search}
          placeholder="Поиск бренда, товара, категории..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
          <div
            className={styles.iconWrapper}
            onClick={() => handleSearch(inputValue)}
          >
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>
      </div>
      
      <div className={styles.right}>
        <div 
          className={styles.cartIconCircle}
          onClick={() => navigate(`/cart`)}
        >
          <img src={cartIcon} alt="Корзина" />
          <span className={styles.badge}>{items.length}</span>  
        </div>
        <img src={headerAvatar} alt="Профиль" className={styles.headerAvatar} />
      </div>
    </header>
  );
}

export default Header;