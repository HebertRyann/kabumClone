import {
  Container,
  Header,
  HeaderContent,
  ChildrensMenu,
  ContentSearch,
  Menu,
  Parent,
  ParentMenu,
  SearchContainer,
  WrapperSearch,
  Product,
  ListProductsCart,
  Total,
  EmpytCheckout,
} from '../styles/pages/checkout';

import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiFrown,
  FiMenu,
  FiMinusSquare,
  FiPlusSquare,
  FiSearch,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
  FiXSquare,
} from 'react-icons/fi';

import {
  FaRegSadCry,
  FaRegSadTear,
  FaSadCry,
  FaSadTear
} from "react-icons/fa";
import {
  RiEmotionSadFill,
} from "react-icons/ri";

import { Input } from '../components/input';

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useCart } from '../hooks/cart';

interface MenuDTO {
  id?: number;
  name: string;
  parent: number | null;
}

interface Products {
  id?: number;
  title: string;
  discount: number;
  description: string;
  old_price: number;
  price: number;
  quantity: number;
  technicalSpecifications: {
    brand: string;
    model: string;
    Clock: number;
    Warranty: number;
    weight: number;
  };
}


const CheckoutPage: React.FC = () => {

  const { cart, decrementProduct, incrementProduct, removeProduct, cartTotal } = useCart();
  const [visibleParentMenu, setVisibleParentMenu] = useState(false);
  const componentRef = useRef(null);
  const [visibleSearchContent, setVisibleSearchContent] = useState(false);
  const [visibleChildrensMenu, setVisibleChildrensMenu] = useState(false);
  const [childrensMenu, setChildrensMenu] = useState<MenuDTO[]>([]);
  const [filterOffers, setFilterOffers] = useState<Products[]>([]);
  const [offers, setOffers] = useState<Products[]>([]);
  const formatValue = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  const [menuData, setMenuData] = useState<MenuDTO[]>([
    { id: 1, name: 'Hardware', parent: null },
    { id: 2, name: 'Samrtphones', parent: null },
    { id: 3, name: 'Perifericos', parent: null },
    { name: 'Placa de video', parent: 1 },
    { name: 'Memoria Ram', parent: 1 },
    { name: 'HD', parent: 1 },
    { name: 'Moto GG', parent: 2 },
    { name: 'Samnsung Gaxlai', parent: 2 },
    { name: 'Asus Rog', parent: 2 },
    { name: 'Headset', parent: 3 },
    { name: 'Teclado', parent: 3 },
    { name: 'Mouse', parent: 3 },
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

  const handleSetVisibleParentMenu = useCallback(() => {
    setVisibleParentMenu(!visibleParentMenu);
    setVisibleChildrensMenu(false);
  }, [visibleParentMenu, visibleChildrensMenu]);

  const handleOpenSubMenu = useCallback((parentID: number) => {
    const childrens = menuData.filter(item => item.parent === parentID);
    if (childrensMenu.length > 0 && childrens[0].name === childrensMenu[0].name) {
      setChildrensMenu(childrens);
      setVisibleChildrensMenu(!visibleChildrensMenu)
    } else {
      setChildrensMenu(childrens);
      setVisibleChildrensMenu(true)
    }
  }, [visibleChildrensMenu, childrensMenu]);

  useEffect(() => {
    fetch('http://localhost:3333/products').then(response => {
      response.json().then(data => {
        setOffers(data);
      })
    })
    componentRef.current.scrollIntoView(
      {
        behavior: 'smooth',
      }
    );
  }, []);

  return (
    <Container>

      <Header>
        <HeaderContent>
          <a href="/" className="Logo">Kabum</a>
          <SearchContainer onMouseLeave={handleLeaveSearch}>
            <WrapperSearch>
              <Input
                icon={FiSearch}
                size={22}
                color={'#ff9000'}
                name="product"
                type="text"
                placeholder="O Que Você esta Procurando"
                onChange={(event) => handleSearchInput(event)}
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
            <p>Profile name <FiChevronDown size={16} /></p>
          </div>
          <div className="containerCart" >
            <div className="IconContainerCart">
              <FiShoppingCart size={20} color="#ff9000" />
            </div>
          </div>
        </HeaderContent>
      </Header>

      <Menu>
        <button type="button" onClick={handleSetVisibleParentMenu}>
          <FiMenu size={20} color="#ff9000" />
              Todas as Categorias
          </button>
      </Menu>

      <Parent >
        <ParentMenu isVisible={visibleParentMenu}>
          {menuData.map(parent => (
            parent.parent === null && (
              <button key={parent.name} onClick={() => handleOpenSubMenu(parent.id)}>
                {parent.name}
                <FiChevronRight size={20} />
              </button>
            )
          ))}
        </ParentMenu>

        <ChildrensMenu isVisible={visibleChildrensMenu}>
          {menuData.map(parent =>
            childrensMenu && childrensMenu.map(children => (
              children.parent === parent.id && (
                <a href="/" key={children.name}>{children.name}</a>
              )
            ))
          )}
        </ChildrensMenu>
      </Parent>

      <ListProductsCart>
        {!cart.length ? (
          <EmpytCheckout>
            <RiEmotionSadFill size={200} color="#ff9000" />
            <h1>Não há nada aqui</h1>
          </EmpytCheckout>
        ) : cart.map(product => (
          <Product key={product.id}>
            <div className="HeaderProduct">
              <img src={product.images[0]} />
              <h1>{product.title}</h1>
            </div>
            <div className="DetailsProduct">
              <FiMinusSquare size={30} color="#000" onClick={() => decrementProduct(product)} />
              <span>{product.quantity}</span>
              <FiPlusSquare size={30} color="#000" onClick={() => incrementProduct(product)} />
              <strong>{formatValue.format(product.price)}</strong>
              <FiXSquare size={30} color="red" onClick={() => removeProduct(product)} />
            </div>
          </Product>
        ))}
      </ListProductsCart>

      <Total ref={componentRef} >
        <div>
          <span>Total dos Produtos: </span>
          <span>{formatValue.format(cartTotal)}</span>
        </div>
        <div>
          <span>Frete: </span>
          <span>R$ 1.000</span>
        </div>
        <div>
          <span>Total: </span>
          <strong>{formatValue.format(cartTotal + 1000)}</strong>
        </div>
      </Total>

    </Container >
  );
};

export default CheckoutPage;