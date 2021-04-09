import Globalstyle from '../styles/globalstyle';
import { CartProvider } from '../hooks/cart';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Globalstyle />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
