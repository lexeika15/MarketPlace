import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState} from 'react';
import styles from  './ProductList.module.css';
import ProductCard from './ProductCard/ProductCard';
import categoriesData from '../../../api/categories.json';
import productsData from '../../../api/products.json';

function ProductList () {
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get('search') || ''; 

  const filteredProducts = productsData
    .filter(product => 
      selectedCategoryIds.length === 0 || selectedCategoryIds.includes(product.categoryId)
    )
    .filter(product => searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => 
      selectedCategoryIds.length > 0
        ? selectedCategoryIds.indexOf(a.categoryId) - selectedCategoryIds.indexOf(b.categoryId)
        : 0
    );
  
  const toggleCategory = (categoryId) => {
    setSelectedCategoryIds(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <div className={styles.filterHeader}>
          <h2>Категории товаров</h2>
          <a href="#settings" className={styles.settings}>Настройки</a>  
        </div>

        <div className={styles.buttons}>
          <button 
            className={styles.button}
            style={{
              backgroundColor: selectedCategoryIds.length === 0 ? '#000' : '#fff',
              color: selectedCategoryIds.length === 0 ? '#fff' : '#000',
              borderColor: '#000'
            }}
            onClick={() => setSelectedCategoryIds([])}
          >
            Все товары
          </button>
          {categoriesData.map(category => {
            const isActive = selectedCategoryIds.includes(category.id);
            return (
              <button
                key={category.id}
                style={{
                  backgroundColor: isActive ? category.color : '#fff',
                  color: isActive ? '#fff' : '#000',
                  borderColor: category.color
                }}
                className={styles.button}
                onClick={() => toggleCategory(category.id)}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <main className={styles.productList}>
          {filteredProducts.map(product => { 
            const category = categoriesData.find(cat => cat.id === product.categoryId);
            return (
              <ProductCard  
                key = {product.id}
                product = {product} 
                category = {category}
                onClick = {() => navigate(`/products/${product.id}`)}
              /> 
            );
          })} 
        </main>
      ) : (
        <div className={styles.emptyState}>
          Товары не найдены
        </div>
      )} 
    </div>
  );
}

export default ProductList;

