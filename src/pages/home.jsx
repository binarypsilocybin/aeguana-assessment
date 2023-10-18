import { useState } from "react";
import { fetchProducts } from "../api-mock/products-api";
import ProductsList from "../products-list";
import { useQuery } from "react-query";
import MultiFilters from "../multifilters";
import Header from "../header";
import ShoppingCart from "../shopping-cart";

const Home = () => {
  const {
    data: products,
    isFetching,
    error,
  } = useQuery("get-products", () => fetchProducts());
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState(products);
  const [checkout, setCheckout] = useState(false);
  const handleAddToCart = (product) => {
    const isProductInCart = Boolean(
      cart.find((item) => item.productId === product.id)
    );
    if (isProductInCart) {
      setCart(
        cart.map((item) => {
          if (item.productId === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { productId: product.id, quantity: 1 }]);
    }
  };

  const handleRemoveCart = (product) => {
    const isProductInCart = Boolean(
      cart.find((item) => item.productId === product.id)
    );
    if (isProductInCart) {
      setCart(
        cart.map((item) => {
          if (item.productId === product.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
      );
    }
  };

  const filterItem = (itemFiltered) => {
    const newItem = products.filter((newVal) => {
      return newVal.category === itemFiltered;
    });
    setItem(newItem);
  };

  if (error) {
    return (
      <div>
        There was an error fetching the products. Please try again later.
      </div>
    );
  }

  return (
    <main>
      <Header />
      {!checkout && (
        <>
          <section className="wrapper-filters">
            <MultiFilters products={products} filterItem={filterItem} />
          </section>
          {isFetching ? (
            <div>Fetching products ... </div>
          ) : (
            <ProductsList
              products={item ? item : products}
              onAddToCart={handleAddToCart}
              onRemoveCart={handleRemoveCart}
            />
          )}
          <div className="wrapper-button">
            <button
              className="card__checkout"
              onClick={() => setCheckout(true)}
            >
              Go to checkout
            </button>
          </div>
        </>
      )}

      {checkout && (
        <>
          <div className="wrapper-checkout">
            <ShoppingCart cart={cart} products={products} />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
