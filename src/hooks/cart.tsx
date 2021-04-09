import {
  createContext,
  useCallback,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";


interface Products {
  id?: number;
  title: string;
  discount: number;
  description: string;
  old_price: number;
  price: number;
  quantity: number;
  images?: [''];
  technicalSpecifications?: {
    brand?: string;
    model?: string;
    Clock?: number;
    Warranty?: number;
    weight?: number;
  };
}

interface CartContext {
  cart: Products[];
  cartTotal: number;
  addToCart(productCart: Products): void;
  incrementProduct(productCart: Products): void;
  decrementProduct(productCart: Products): void;
  removeProduct(productCart: Products): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {

  const [cart, setCart] = useState<Products[]>([]);

  const addToCart = useCallback((products: Products) => {
    const findProduct = cart.find(product => product.title === products.title);
    if (findProduct) {
      setCart(
        cart.map(productCart =>
          productCart.title === products.title ? { ...products, quantity: productCart.quantity + 1 } : productCart
        ))
    } else {
      setCart([...cart, products]);
    }
  }, [cart]);

  const incrementProduct = useCallback((productCart: Products) => {
    const findProduct = cart.find(product => product.title === productCart.title);
    if (findProduct) {
      setCart(cart.map(product => product.title === productCart.title ? { ...productCart, quantity: product.quantity + 1 } : product));
      localStorage.setItem('@Kabum:CartProducts', JSON.stringify(cart));
    }
  }, [cart]);

  const decrementProduct = useCallback((productCart: Products) => {
    const findProduct = cart.find(product => product.title === productCart.title);
    if (findProduct && findProduct.quantity > 1) {
      setCart(cart.map(product => product.title === productCart.title ? { ...productCart, quantity: product.quantity - 1 } : product));
    }

    localStorage.setItem('@Kabum:CartProducts', JSON.stringify(cart));

  }, [cart]);

  const removeProduct = useCallback((productCart: Products) => {
    const findProduct = cart.filter(product => product.title !== productCart.title);
    if (findProduct) {
      setCart(findProduct);
    }

    localStorage.setItem('@Kabum:CartProducts', JSON.stringify(cart));

  }, [cart]);

  const cartTotal = useMemo(() => {
    const total = cart.reduce((accumlator, product) => {
      const totalProduct = product.price * product.quantity;
      return accumlator + totalProduct;
    }, 0);
    return total;
  }, [cart]);

  const value = useMemo(
    () => ({ cart, addToCart, incrementProduct, decrementProduct, removeProduct, cartTotal }),
    [addToCart, incrementProduct, decrementProduct, removeProduct, cart, cartTotal],
  );

  useEffect(() => {
    const storagedProductsCart = localStorage.getItem('@Kabum:CartProducts');
    if (storagedProductsCart) {
      setCart(JSON.parse(storagedProductsCart));
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('@Kabum:CartProducts', JSON.stringify(cart));
  }, [cart]);


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used whitin a CartProvider')
  }

  return context;
};

export { CartProvider, useCart };
