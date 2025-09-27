import MainLayout from '../../shared/layouts/MainLayout/MainLayout';
import ProductList from '../../shared/components/ProductList/ProductList';
import { useProductSearch } from '../../shared/hooks/useProductSearch';

function MainPage () {
  const { searchQuery, handleSearch } = useProductSearch(); 

  return (
    <MainLayout headerProps={{ onSearch: handleSearch }}>
      {<ProductList searchQuery={searchQuery} />}
    </MainLayout> 
  );
}

export default MainPage;