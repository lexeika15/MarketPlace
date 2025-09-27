import { useDispatch } from 'react-redux';
import styles from './ProductCard.module.css';
import { addToCart } from '../../../../store/cartSlice';

function ProductCard({ product, category, onClick }) {
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;  

  const dispatch = useDispatch();
  const selectedSize = product.sizes[0];

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch(addToCart({
      ...product,
      selectedSize
    }));
  };

  return (
    <div className={styles.productCard} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image}/>
        {category && (
          <div
            className={styles.categoryBadge}
            style={{
              backgroundColor: category.color,
              borderColor: '#000',
              color: '#fff'
            }}
          >
            {category.name}  
          </div>
        )}
      </div>

      <h3 className={styles.title}>{product.name}</h3>

      <div className={styles.priceBlock}>
        <span className={styles.price}>
          {product.price.toLocaleString('ru-RU', {
            style: 'currency',
            currency: product.currency
          })} 
        </span>

        {hasDiscount ? (
          <div className={styles.oldPriceRow}>
            <span className={styles.oldPrice}>
              {product.oldPrice.toLocaleString('ru-RU', {
                style: 'currency',
                currency: product.currency
              })}
            </span>

            <span className={styles.discount}>
              -{discountPercent}%
            </span>
          </div>
        ) : (
          <div className={styles.oldPriceRowPlaceholder}></div>
        )}
      </div>

      <button 
        className={styles.button}
        onClick={handleAdd}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductCard;