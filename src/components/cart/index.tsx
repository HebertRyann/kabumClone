import {
  useState,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,

} from 'react';
import {
  CartContainer,
  CartProducts,
  ContentCart,
  EmptyBag,
  SubTotalCart,
  TextContainerCart,
  WrapperCart,
} from '../../styles/components/cart';
import {
  FiShoppingBag,
  FiPlusSquare,
  FiMinusSquare,
  FiXSquare,
} from 'react-icons/fi';

interface Products {
  id: number;
  title: string;
  discount: number;
  description: string;
  old_price: number;
  price: number;
  quantity: number;
}

interface CartProps {
  isVisisble: boolean;
  isScolling: boolean;
  cartState?: Products[];
}

export const Cart: React.FC<CartProps> = ({ isVisisble, isScolling, cartState }) => {
  const [visibleCart, setVisibleCart] = useState(false);
  const [cart, setCart] = useState<Products[]>(cartState);
  const [scrolling, setScrolling] = useState(false);
  const formatValue = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  const handleOpenCart = useCallback(() => {
    setVisibleCart(!visibleCart);
    console.log('true')
  }, [visibleCart]);

  const handleIncrementProduct = useCallback((productCart: Products) => {
    const findProduct = cart.find(product => product.title === productCart.title);
    if (findProduct) {
      setCart(cart.map(product => product.title === productCart.title ? { ...productCart, quantity: product.quantity + 1 } : product));
    }
  }, [cart]);

  const handleDecrementProduct = useCallback((productCart: Products) => {
    const findProduct = cart.find(product => product.title === productCart.title);
    if (findProduct && findProduct.quantity > 1) {
      setCart(cart.map(product => product.title === productCart.title ? { ...productCart, quantity: product.quantity - 1 } : product));
    }
  }, [cart]);

  const handleRemoveProduct = useCallback((productCart: Products) => {
    const findProduct = cart.filter(product => product.title !== productCart.title);
    if (findProduct) {
      setCart(findProduct);
    }
  }, [cart]);

  const cartTotal = useMemo(() => {
    const total = cart.reduce((accumlator, product) => {
      const totalProduct = product.price * product.quantity;
      return accumlator + totalProduct;
    }, 0);
    return total;
  }, [cart]);

  return (
    
  );
};
export default Cart;