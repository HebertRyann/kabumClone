import {
  useCallback,
  useState,
  FormEvent,
} from 'react';
import {
  ContentSearch,
  SearchContainer,
  WrapperSearch,
} from '../../styles/components/search';
import { Input } from '../input';
import { FiSearch } from 'react-icons/fi';

interface Products {
  id: number;
  title: string;
  discount: number;
  description: string;
  old_price: number;
  price: number;
  quantity: number;
}

export const Search: React.FC = () => {
  const [visibleSearchContent, setVisibleSearchContent] = useState(false);
  const [filterOffers, setFilterOffers] = useState<Products[]>([]);
  const [offers, setOffers] = useState<Products[]>([
    { id: 1, title: "RTX 3010", discount: 10, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 2, title: "RTX 3020", discount: 11, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 3, title: "RTX 3030", discount: 12, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 4, title: "RTX 3040", discount: 13, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 5, title: "RTX 3050", discount: 14, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 6, title: "RTX 3060", discount: 15, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 7, title: "RTX 3070", discount: 16, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 8, title: "RTX 3080", discount: 17, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 9, title: "RTX 3090", discount: 18, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 10, title: "RTX 3100", discount: 19, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 11, title: "RTX 3110", discount: 20, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 12, title: "RTX 3120", discount: 21, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 13, title: "RTX 3130", discount: 22, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 14, title: "RTX 3140", discount: 23, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 15, title: "RTX 3150", discount: 24, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 16, title: "RTX 3160", discount: 25, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 17, title: "RTX 3170", discount: 26, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 18, title: "RTX 3180", discount: 27, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 19, title: "RTX 3190", discount: 28, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 20, title: "RTX 3200", discount: 29, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 21, title: "RTX 3210", discount: 30, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 22, title: "RTX 3220", discount: 31, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 23, title: "RTX 3230", discount: 32, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 24, title: "RTX 3240", discount: 33, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 25, title: "RTX 3250", discount: 34, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 26, title: "RTX 3260", discount: 35, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
    { id: 27, title: "RTX 3270", discount: 36, description: "Melhor Placa de video do mundo", old_price: 40000, price: 12000, quantity: 1 },
  ]);

  const handleLeaveSearch = useCallback(() => {
    setVisibleSearchContent(false);
  }, [visibleSearchContent]);

  const handleToggleSearch = useCallback(() => {
    setVisibleSearchContent(true);
  }, [visibleSearchContent]);

  const handleSearchInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    const offersString = offers.map(product => JSON.stringify(product));
    const filter = offersString.map(product => product.toLowerCase().includes(`${event.currentTarget.value.toLowerCase()}`) ? JSON.parse(product) : false);
    const filterOffers = filter.filter((product) => product !== false);
    if (filterOffers) {
      setFilterOffers(filterOffers);
    }
  }, [filterOffers]);

  return (
    <div></div>
  )
    
};
export default Search;