import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import MainLayout from '../../shared/layouts/MainLayout/MainLayout';
import ProductDetails from '../../shared/components/ProductDetails/ProductDetails';
import productsData from '../../api/products.json';
import categoriesData from '../../api/categories.json';
import { useProductSearch } from '../../shared/hooks/useProductSearch';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);

  const { handleSearch } = useProductSearch();

  useEffect(() => {
    const foundProduct = productsData.find(p => String(p.id) === id);
    setProduct(foundProduct);

    if(foundProduct) {
      const foundCategory = categoriesData.find(cat => cat.id === foundProduct.categoryId);
      setCategory(foundCategory);
    }
  }, [id])

  return (
    <MainLayout headerProps={{ onSearch: handleSearch }}>
      {product ? (
        <ProductDetails product={product} category={category} />
      ) : (
        <div>Товар не найден</div>
      )}
    </MainLayout>
  );
}

export default ProductPage;