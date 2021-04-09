import {
  useRouter,
} from "next/router";

import {
  Container,
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
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiMinusSquare,
  FiPlusSquare,
  FiSearch,
  FiShoppingBag,
  FiShoppingCart,
  FiStar,
  FiUser,
  FiXSquare,
} from 'react-icons/fi';
import { Input } from '../components/input';
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useCart } from "../hooks/cart";
import api from "../service/api";
import { GetStaticPaths, GetStaticProps } from "next";

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
  const { query } = useRouter();
  const { addToCart, cartTotal, cart, removeProduct, incrementProduct, decrementProduct } = useCart();
  const [visibleCart, setVisibleCart] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [visibleParentMenu, setVisibleParentMenu] = useState(false);
  const [visibleSearchContent, setVisibleSearchContent] = useState(false);
  const [visibleChildrensMenu, setVisibleChildrensMenu] = useState(false);
  const [childrensMenu, setChildrensMenu] = useState<MenuDTO[]>([]);
  const [filterOffers, setFilterOffers] = useState<Products[]>([]);
  const [relateOffers, setRelateOffers] = useState<Products[]>([]);
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [imagesProducts, setImagesProducts] = useState(['']);
  const [selectedImage, setSelectedImage] = useState("");
  const [offers, setOffers] = useState<Products>();
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

  const handleLeaveSearch = useCallback(() => {
    setVisibleSearchContent(false);
  }, [visibleSearchContent]);

  const handleToggleSearch = useCallback(() => {
    setVisibleSearchContent(true);
  }, [visibleSearchContent]);

  const handleSearchInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    const offersString = allProducts.map(product => JSON.stringify(product));
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

  const handleSelectImage = useCallback((product) => {
    setSelectedImage(product);
  }, [selectedImage]);

  useEffect(() => {
    if (product) {
      setOffers(product);
      setRelateOffers(product.relatedProducts);
      setImagesProducts(product.images);
      setSelectedImage(product.images[0]);
    }
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
                {visibleSearchContent && filterOffers.length === 0 && allProducts.map(product => (
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

      <Menu>
        <button type="button" onClick={handleSetVisibleParentMenu}>
          <FiMenu size={25} color="#ff9000" />
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
              <h1>{offers?.title}</h1>
              <p>{offers?.description}</p>
              <div className="infoPriceContainer">
                <span className="old_price">{`de ${formatValue.format(offers?.old_price)}`}</span>
                <strong>{`Por ${formatValue.format(offers?.price)}`}</strong>
                <span>ou 10x de R$ 1.200,00</span>
              </div>
              <button
                onClick={() => addToCart(offers)}
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
                  <td>{offers?.technicalSpecifications.brand}</td>
                </tr>
                <tr >
                  <td>Modelo</td>
                  <td>{offers?.technicalSpecifications.model}</td>
                </tr>
                <tr className="WithBackground">
                  <td>Clock</td>
                  <td>{`${offers?.technicalSpecifications.Clock} Ghz`}</td>
                </tr>
                <tr >
                  <td>Garantia</td>
                  <td>{`${offers?.technicalSpecifications.Warranty} ano`}</td>
                </tr>
                <tr className="WithBackground">
                  <td>Peso</td>
                  <td>{`${offers?.technicalSpecifications.weight} gramas`}</td>
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
                <p>4</p>
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
                <p>4</p>
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
                <p>4</p>
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
          <></>
        )}

    </Container>
  )
}
export default productPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3333/products`);
  const products = await response.json();

  const paths = products.map((product) => {
    return { params: { id: `${product.id}` } }
  });

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const product = await response.json();
  return {
    props: {
      product,
    }
  }
};