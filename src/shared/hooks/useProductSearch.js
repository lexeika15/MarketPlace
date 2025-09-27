import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function useProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('search') || '';
    setSearchQuery(query);
  }, [searchParams]);

  const handleSearch = (query) => {
    const trimmed = query.trim();
    if(trimmed)
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
    else
      navigate(`/products`);
  };

  return { searchQuery, handleSearch };
}