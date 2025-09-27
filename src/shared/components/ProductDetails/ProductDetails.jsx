import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductDetails.module.css';

function ProductDetails({ product, category }) {
  const [mainImage, setMainImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const trackRef = useRef(null);

  const thumbnails = Array(5).fill(product.image);

  const scrollByOneThumbnail = (direction) => {
    if(trackRef.current) {
      const firstItem = trackRef.current.querySelector(`.${styles.productThumbnailItem}`);
      if(!firstItem) return;

      const itemWidth = firstItem.offsetWidth;
      const gap = parseFloat(getComputedStyle(trackRef.current).gap || 0);
      const step = itemWidth + gap;

      trackRef.current.scrollBy({
        left: direction * step,
        behavior: "smooth" 
      });
    }
  };

  return(
    <article className={styles.product}>
      <Link to="/products" className={styles.backLink}>Назад</Link>
      <span className={styles.productTitle}>{product.name}</span>
      <div className={styles.productInfo}>
        <div className={styles.productGallery}>
          <img 
            src={mainImage} 
            alt={`${product.name}, ${category?.name || ''}`} 
          />
        
          <div className={styles.productThumbnails}>
            <button
              type="button"
              className={styles.carouselArrow}
              onClick={() => scrollByOneThumbnail(-1)}
              aria-label="Прокрутить влево"
            >
              ◀
            </button>

            <div className={styles.productThumbnailsTrack} ref={trackRef}>
              {thumbnails.map((img, idx) => (
                <div key={idx} className={styles.productThumbnailItem}>
                  <button
                    type="button"
                    className={styles.productThumbnailButton}
                    onClick={() => setMainImage(img)}
                    aria-label={`Показать изображение ${idx + 1}`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} - миниатюра ${idx + 1}`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={styles.carouselArrow}
              onClick={() => scrollByOneThumbnail(1)}
              aria-label="Прокрутить вправо"
            >
              ▶
            </button>
          </div>
        </div>

        <div className={styles.productInfoPanel}>
          <p className={styles.productPrice}>
            {product.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: product.currency
            })}
            <span className={styles.productUnit}> за шт.</span>
          </p>

          <section className={styles.productDetailsOptions}>
            <span className={styles.productDetailsOptionsTitle}>Размер</span>
            <div className={styles.productDetailsSizes}> 
              {product.sizes && product.sizes.map((size, index) => (
                <button 
                  key={index}
                  className={`${styles.productDetailsSize} ${selectedSize === size ? styles.active : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>  
              ))}  
            </div>
          </section>

          <button 
            type="button" 
            className={styles.addToCart}
          >
            В корзину за  <></>
            {product.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: product.currency
            })}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductDetails;