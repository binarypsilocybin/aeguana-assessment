import Product from "./product";

const ProductsList = ({ products, onAddToCart, onRemoveCart }) => {
  return (
    <section className="wrapper-container">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onRemoveCart={onRemoveCart}
        />
      ))}
    </section>
  );
};

export default ProductsList;
