import {
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  Container,
  HeaderContent,
  SearchContainer,
  WrapperSearch,
  ContentSearch
} from '../../styles/components/header';
import {
  FiUser,
  FiChevronDown,
  FiSearch,
  FiShoppingCart
} from 'react-icons/fi'
import { Input } from '../input';
import { useCart } from '../../hooks/cart';
import axios from 'axios';

interface Products {
  id: number;
  title: string;
  discount: number;
  description: string;
  old_price: number;
  price: number;
  quantity: number;
}

interface HeaderProps {
  handleOpenCart(): void;
}


export const Header: React.FC<HeaderProps> = ({ handleOpenCart }) => {
  const { cart } = useCart();
  const [visibleSearchContent, setVisibleSearchContent] = useState(false);
  const [filterOffers, setFilterOffers] = useState<Products[]>([]);
  const [offers, setOffers] = useState<Products[]>([]);

  useEffect(() => {
    axios.get('/api/listproducts').then(response => {
      setOffers(response.data);
    })
  }, []);

  const handleLeaveSearch = useCallback(() => {
    setVisibleSearchContent(false);
  }, [visibleSearchContent]);

  const handleToggleSearch = useCallback(() => {
    setVisibleSearchContent(true);
  }, [visibleSearchContent]);

  const handleSearchInput = useCallback((searchValue: string) => {
    const regex = new RegExp(`${searchValue}\\w*`,'ig');
    const filteredOffers = offers.filter((product) => product.title.match(regex));
    setFilterOffers(filteredOffers);
  }, [filterOffers]);

  return (
    <Container>
      <HeaderContent>
          <a href="/">KabumClone</a>
          <SearchContainer onMouseLeave={handleLeaveSearch}>
            <WrapperSearch>
              <Input
                icon={FiSearch}
                size={22}
                color={'#ff9000'}
                name="product"
                type="text"
                placeholder="O Que Você esta Procurando"
                onChange={(event) => handleSearchInput(event.target.value)}
                onClick={handleToggleSearch}
              />
              <ContentSearch isVisible={visibleSearchContent}  >
                {visibleSearchContent && filterOffers.length > 0 && filterOffers.map(product => (
                  <a key={product.title} href={`/${product.id}`} className="ProductsSearch">
                    <p>{product.title}</p>
                    <strong>{product.description}</strong>
                  </a>
                ))}
                {visibleSearchContent && filterOffers.length === 0 && offers.map(product => (
                  <a key={product.title} href={`/${product.id}`} className="ProductsSearch">
                    <p>{product.title}</p>
                    <strong>{product.description}</strong>
                  </a>
                ))}
              </ContentSearch>
            </WrapperSearch>
          </SearchContainer>
          <div>
            <div className="IconContainerUser">
              <FiUser size={20} color="#ff9000" />
            </div>
            <p>TestAccount <FiChevronDown size={16} /></p>
          </div>
          <div className="containerCart" onClick={handleOpenCart}>
            {cart.length !== 0 && (
              <span className={cart && cart.length + 1 >= 10 ? "spanContainer" : null}>
                <p>{cart.length !== 0 && cart.length}</p>
              </span>
            )}
            <div className="IconContainerCart">
              <FiShoppingCart size={20} color="#ff9000" />
            </div>
          </div>
        </HeaderContent>
    </Container>
  );
};

export default Header;