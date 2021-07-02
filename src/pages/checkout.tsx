import {
  Container,
  Product,
  ListProductsCart,
  Total,
  EmpytCheckout,
} from '../styles/pages/checkout';

import {
  FiMinusSquare,
  FiPlusSquare,
  FiXSquare,
} from 'react-icons/fi';
import {
  RiEmotionSadFill,
} from "react-icons/ri";

import { Header } from '../components/header';
import { Menu } from '../components/menu';
import { TreeMenu } from '../components/treemenu';

import { useCallback, useEffect, useRef, useState } from 'react';

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
  const componentRef = useRef(null);
  const [childrensMenu, setChildrensMenu] = useState<MenuDTO[]>([]);
  const [visibleCart, setVisibleCart] = useState(false);
  const [visibleParentMenu, setVisibleParentMenu] = useState(false);
  const [visibleChildrensMenu, setVisibleChildrensMenu] = useState(false);
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


  useEffect(() => {
    componentRef.current.scrollIntoView(
      {
        behavior: 'smooth',
      }
    );
  }, []);

  return (
    <Container>

      <Header handleOpenCart={handleOpenCart}/>

      <Menu handleOpen={handleSetVisibleParentMenu}/>

      <TreeMenu 
        isVisible={visibleParentMenu} 
        handleOpenSubMenu={handleOpenSubMenu}
        isVisibleChildrens={visibleChildrensMenu}
        childrensMenu={childrensMenu}
      />

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