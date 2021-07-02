import {
  Container,
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
import { useCart } from '../../hooks/cart';

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
  const { decrementProduct, incrementProduct, removeProduct, cartTotal, cart } = useCart();
  const formatValue = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return (
    <Container isVisible={isVisisble} isScrolling={isScolling} >
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
      </Container>
  );
};
export default Cart;