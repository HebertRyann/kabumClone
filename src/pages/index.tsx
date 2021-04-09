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
  Header,
  HeaderContent,
  CartContainer,
  CartProducts,
  ChildrensMenu,
  ContentCart,
  ContentSearch,
  EmptyBag,
  Menu,
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
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useCart } from '../hooks/cart';
import Link from 'next/link';
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
  const { addToCart, cart, incrementProduct, decrementProduct, removeProduct, cartTotal } = useCart();
  const [countDown, setCountDown] = useState(new Date("12/10/2077 00:00:00").getTime());
  const [currentDate, setCurrentDate] = useState({ days: 0, hour: 0, minutes: 0, seconds: 0 });
  const [visibleCart, setVisibleCart] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [visibleParentMenu, setVisibleParentMenu] = useState(false);
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
    fetch("http://localhost:3333/products").then(response => {
      response.json().then(data => {
        setOffers(data);
      });
    });

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

      <Header>
        <HeaderContent>
          <h1>Kabum</h1>
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
      </Header>

      <CartContainer isVisible={visibleCart} isScrolling={scrolling} >
        {cart.length === 0 ? (
          <EmptyBag>
            <FiShoppingBag size={50} color="#ff9000" />
            <p>Não ha Nada aqui</p>
          </EmptyBag>
        ) :
          <WrapperCart>
            <ContentCart>
              {cart.map(product => (
                <CartProducts key={product.id}>
                  <p>{product.title} x <strong>{product.quantity}</strong></p>

                  <strong>{formatValue.format(product.price)}</strong>
                  <FiPlusSquare size={24} color="#000" onClick={() => incrementProduct(product)} />
                  <FiMinusSquare size={24} color="#000" onClick={() => decrementProduct(product)} />
                  <FiXSquare size={24} color="red" onClick={() => removeProduct(product)} />
                </CartProducts>
              ))}
            </ContentCart>
            <SubTotalCart>
              <TextContainerCart>
                <p>Total</p>
                <strong>{formatValue.format(cartTotal)}</strong>
              </TextContainerCart>
              <a href="/checkout">
                Finalizar Compra
              </a>
            </SubTotalCart>
          </WrapperCart>
        }
      </CartContainer>

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

      <ContainerOrffers isVisible={visibleChildrensMenu}>
        <ContentOffers>
          <h1>Ofertas Diarias <p>{`${currentDate.hour < 10 ? `0${currentDate.hour}` : currentDate.hour}:${currentDate.minutes < 10 ? `0${currentDate.minutes}` : currentDate.minutes}:${currentDate.seconds < 10 ? `0${currentDate.seconds}` : currentDate.seconds}`} </p></h1>
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
}
export default Home;