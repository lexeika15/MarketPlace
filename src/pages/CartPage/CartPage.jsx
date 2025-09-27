import MainLayout from '../../shared/layouts/MainLayout/MainLayout';
import CartContent from '../../shared/components/CartContent/CartContent';
import { useProductSearch } from '../../shared/hooks/useProductSearch';

function Cart() {
  const { handleSearch } = useProductSearch();

  return (
    <MainLayout headerProps = {{ onSearch: handleSearch }}>
      <CartContent />
    </MainLayout>
  );
}

export default Cart;

