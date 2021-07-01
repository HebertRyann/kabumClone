import {
  Container,
  ContainerOrffers,
  ContentOffers,
  WrapperOffers,
  Offers,
  IconContainerLeft,
  IconContainerRight,
  ContainerReleases,
  ProductsReleases,
  WrapperRealeases,
  TextContainer,
  ContainerPreOrder,
  TextPreOrder,
  WrapperPreOrder,
  PreOrder,
  HeaderContent,
  CartContainer,
  CartProducts,
  ChildrensMenu,
  ContentCart,
  ContentSearch,
  EmptyBag,
  MenuContent,
  Parent,
  ParentMenu,
  SearchContainer,
  SubTotalCart,
  TextContainerCart,
  WrapperCart,
  WrapperSearch,
} from '../styles/pages/home';
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiMinusSquare,
  FiPlusSquare,
  FiSearch,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
  FiXSquare,
} from 'react-icons/fi';
import { Input } from '../components/input';
import { Header } from '../components/header';
import { Menu } from '../components/menu';
import { TreeMenu } from '../components/treemenu';
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useCart } from '../hooks/cart';
import Link from 'next/link';
import axios from 'axios';
import Cart from '../components/cart';
interface MenuDTO {
  id?: number;
  name: string;
  parent: number | null;
}
interface Products {
  id: number;
  title: string;
  discount: number;
  description: string;
  old_price: number;
  price: number;
  quantity: number;
  images?: [''];
  technicalSpecifications: {
    brand: string;
    model: string;
    Clock: number;
    Warranty: number;
    weight: number;
  };
}


export const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState([1, 2, 3]);
  const { addToCart } = useCart();
  const [countDown, setCountDown] = useState(new Date("12/10/2077 00:00:00").getTime());
  const [currentDate, setCurrentDate] = useState({ days: 0, hour: 0, minutes: 0, seconds: 0 });
  const [visibleCart, setVisibleCart] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [visibleParentMenu, setVisibleParentMenu] = useState(false);
  const [visibleChildrensMenu, setVisibleChildrensMenu] = useState(false);
  const [childrensMenu, setChildrensMenu] = useState<MenuDTO[]>([]);
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

  const incrementMenu = useCallback(() => {
    const numberIndex = activeIndex.map(item => item + 3);
    if (offers.length !== 0 && offers[offers.length - 1].id === activeIndex[activeIndex.length - 1]) {
      setActiveIndex([1, 2, 3]);
      return;
    }
    setActiveIndex(numberIndex);
  }, [activeIndex]);

  const decrementMenu = useCallback(() => {
    const numberIndex = activeIndex.map(item => item - 3);
    if (activeIndex[0] === offers.length - offers.length + 1) {
      setActiveIndex([25, 26, 27]);
      return;
    }
    setActiveIndex(numberIndex);
  }, [activeIndex]);

  const updateCountDown = useCallback(() => {
    const currentTime = new Date().getTime();

    const timeLeft = countDown - currentTime;

    const times =
    {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),

      minutes: Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      )
      ,
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000)
    }


    setCurrentDate({
      days: times.days,
      hour: times.hours,
      minutes: times.minutes,
      seconds: times.seconds,
    })
  }, [])

  useEffect(() => {
    axios.get('/api/listproducts').then(response => {
      setOffers(response.data);
    })
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    })
  }, []);

  useEffect(() => {
    setInterval(() => {
      updateCountDown()
    }, 1000);
  }, []);

  const handleOpenCart = useCallback(() => {
    setVisibleCart(!visibleCart)
  }, [visibleCart]);

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

  return (
    <Container>

      <Header handleOpenCart={handleOpenCart}/>

      <Cart isScolling={scrolling} isVisisble={visibleCart} />

      <Menu handleOpen={handleSetVisibleParentMenu}/>

      <TreeMenu 
        isVisible={visibleParentMenu} 
        handleOpenSubMenu={handleOpenSubMenu}
        isVisibleChildrens={visibleChildrensMenu}
        childrensMenu={childrensMenu}
      />

      <ContainerOrffers isVisible={visibleChildrensMenu}>
        <ContentOffers>
          <h1>Ofertas Diarias 
            <p>
              {currentDate.hour < 10 
                ? `0${currentDate.hour}` 
                : currentDate.hour
              }:{currentDate.minutes < 10 
                ? `0${currentDate.minutes}` 
                : currentDate.minutes
              }:{currentDate.seconds < 10 
                ? `0${currentDate.seconds}` 
                : currentDate.seconds
              }
            
            </p>
          </h1>
          <WrapperOffers>
            <IconContainerLeft>
              <div>
                <FiChevronLeft size={30} color="#000" onClick={decrementMenu} />
              </div>
            </IconContainerLeft>
            {offers.map((item, index) => (
              activeIndex.find(item => item === index + 1) && (
                <Offers key={item.title} >
                  <a href={`/${item.id}`}>

                    <span>{`${item.discount}%`}</span>
                    <h1>
                      {item.title}
                    </h1>

                    <div className="ContainerDetails">
                      <p>{item.description}</p>
                      <span>De  {formatValue.format(item.old_price)} </span>
                      <strong>Por  {formatValue.format(item.price)}</strong>
                    </div>
                  </a>
                </Offers>
              )
            ))}
            <IconContainerRight>
              <div>
                <FiChevronRight size={30} color="#000" onClick={incrementMenu} />
              </div>
            </IconContainerRight>
          </WrapperOffers>
        </ContentOffers>
      </ContainerOrffers>

      <ContainerReleases >
        <TextContainer>
          <h1>
            Acabaram de Chegar
          </h1>
          <span>Ver mais</span>
        </TextContainer>
        <WrapperRealeases >
          {offers.map((product, index) => (
            index + 1 >= offers.length - 2 && index + 1 <= offers.length && (
              <ProductsReleases key={product.id}>
                <a href={`/${product.id}`} >
                  <h1>{product.id}</h1>
                  <p>{product.description}</p>
                  <strong>{formatValue.format(product.price)}</strong>
                </a>
                <button type="button" onClick={() => addToCart(product)}>Adicionar no Carrinho</button>
              </ProductsReleases>
            )
          ))}
        </WrapperRealeases>
      </ContainerReleases>

      <ContainerPreOrder >
        <TextPreOrder>
          <h1>Reserve Antecipadamente</h1>
          <span>ver mais</span>
        </TextPreOrder>
        <WrapperPreOrder>
          {offers.map((product, index) => (
            index + 1 >= 10 && index + 1 <= 12 && (
              <PreOrder key={product.id}>
                <a href={`/${product.id}`}>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <strong>{formatValue.format(product.price)}</strong>
                </a>
                <button type="button" onClick={() => addToCart(product)}>Adicionar no Carrinho</button>
              </PreOrder>
            )
          ))}
        </WrapperPreOrder>
      </ContainerPreOrder>

    </Container >
  )
};
export default Home;