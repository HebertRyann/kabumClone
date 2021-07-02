import {
  Container,
  Ratings,
  DetailsProducts,
  RelatedProducts,
  InfoProduct,
  ProductImage,
  ProductContainer,
  ContentProductImage,
  MainImageProduct,
  Product,
  WrapperProduct,
  WrapperRelated,
  RatingContainer,
  CommentRating,
  StarContainer,
  ContentStar,
} from '../styles/pages/productPage';
import {
  FiStar,
} from 'react-icons/fi';
import { Header } from '../components/header';
import { Menu } from '../components/menu';
import { TreeMenu } from '../components/treemenu';
import Cart from '../components/cart';
import { useCallback, useEffect, useState } from 'react';
import { useCart } from "../hooks/cart";
import { GetStaticPaths, GetStaticProps } from "next";
import { offers } from '../constants';


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
  technicalSpecifications: {
    brand: string;
    model: string;
    Clock: number;
    Warranty: number;
    weight: number;
  };
}

const productPage = ({ product }) => {
  const { addToCart } = useCart();
  const [visibleCart, setVisibleCart] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [visibleParentMenu, setVisibleParentMenu] = useState(false);
  const [visibleChildrensMenu, setVisibleChildrensMenu] = useState(false);
  const [childrensMenu, setChildrensMenu] = useState<MenuDTO[]>([]);
  const [relateOffers, setRelateOffers] = useState<Products[]>([]);
  const [imagesProducts, setImagesProducts] = useState(['']);
  const [selectedImage, setSelectedImage] = useState("");
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

  const handleSelectImage = useCallback((product) => {
    setSelectedImage(product);
  }, [selectedImage]);

  useEffect(() => {
    if(product) {
      setRelateOffers(product.relatedProducts);
      setImagesProducts(product.images);
      setSelectedImage(product.images[0]);
    }
  }, []);

  
  useEffect(() => {
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);


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

      {offers ? (
        <ProductContainer isVisible={visibleParentMenu}>

          <WrapperProduct>

            <ProductImage>
              {imagesProducts && imagesProducts.map((item, index) => (
                index <= 2 && (

                  <ContentProductImage
                    src={item}
                    key={item}
                    onClick={() => handleSelectImage(item)}
                    className={selectedImage && selectedImage === item ? "selected" : ""}
                  />
                )
              ))}
            </ProductImage>

            <MainImageProduct>
              <img src={selectedImage && selectedImage} />
            </MainImageProduct>

            <InfoProduct>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <div className="infoPriceContainer">
                <span className="old_price">{`de ${formatValue.format(product.old_price)}`}</span>
                <strong>{`Por ${formatValue.format(product.price)}`}</strong>
                <span>ou 10x de R$ 1.200,00</span>
              </div>
              <button
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
            </button>
            </InfoProduct>

          </WrapperProduct>

          <RelatedProducts>
            <h1>Compre tambem...</h1>

            <WrapperRelated>
              {relateOffers.map((item, index) => (
                index <= 5 && (
                  <Product key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <strong>{formatValue.format(item.price)}</strong>
                    <button
                      onClick={() => addToCart(item)}
                    >Adicionar ao Carrinho</button>
                  </Product>
                )
              ))}
            </WrapperRelated>

          </RelatedProducts>

          <DetailsProducts>
            <h1>Informaçoes do Produto</h1>
            <strong>Sobre o produto</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sed ullamcorper morbi tincidunt ornare massa eget.
              Nulla at volutpat diam ut venenatis tellus.
              Pulvinar elementum integer enim neque volutpat ac.
              Sodales neque sodales ut etiam. Tempus quam pellentesque nec nam.
              Dui vivamus arcu felis bibendum ut.
              Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.
              Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.
              Faucibus ornare suspendisse sed nisi lacus sed.
              Urna nunc id cursus metus aliquam eleifend mi.
              Lectus arcu bibendum at varius vel.
          </p>
            <strong>Especificaçoes tecnicas</strong>
            <table>
              <tbody>
                <tr className="WithBackground">
                  <td>Marca</td>
                  <td>{product.technicalSpecifications.brand}</td>
                </tr>
                <tr >
                  <td>Modelo</td>
                  <td>{product.technicalSpecifications.model}</td>
                </tr>
                <tr className="WithBackground">
                  <td>Clock</td>
                  <td>{`${product.technicalSpecifications.Clock} Ghz`}</td>
                </tr>
                <tr >
                  <td>Garantia</td>
                  <td>{`${product.technicalSpecifications.Warranty} ano`}</td>
                </tr>
                <tr className="WithBackground">
                  <td>Peso</td>
                  <td>{`${product.technicalSpecifications.weight} gramas`}</td>
                </tr>
              </tbody>
            </table>
          </DetailsProducts>

          <Ratings>
            <RatingContainer>
              <CommentRating>
                <h1>Otima Compra</h1>
                <p>foi a melhor compra que eu fiz realment e perder um rim valeu...</p>
                <span>Jaguapicariba,almadengs BA</span>
              </CommentRating>
              <StarContainer>
                <p>5</p>
                <ContentStar>
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                </ContentStar>
              </StarContainer>
            </RatingContainer>
            <RatingContainer>
              <CommentRating>
                <h1>Otima Compra</h1>
                <p>foi a melhor compra que eu fiz realment e perder um rim valeu...</p>
                <span>Jaguapicariba,almadengs BA</span>
              </CommentRating>
              <StarContainer>
                <p>5</p>
                <ContentStar>
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                </ContentStar>
              </StarContainer>
            </RatingContainer>
            <RatingContainer>
              <CommentRating>
                <h1>Otima Compra</h1>
                <p>foi a melhor compra que eu fiz realment e perder um rim valeu...</p>
                <span>Jaguapicariba,almadengs BA</span>
              </CommentRating>
              <StarContainer>
                <p>5</p>
                <ContentStar>
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                  <FiStar size={21} />
                </ContentStar>
              </StarContainer>
            </RatingContainer>
          </Ratings>

        </ProductContainer>
      ) : (
          <><h1>Loading...</h1></>
        )}

    </Container>
  )
}
export default productPage;

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = offers.map((product) => {
    return { params: { id: `${product.id}` } }
  });

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const product = offers.find(product => `${product.id}` === id);
  return {
    props: {
      product,
    }
  }
};