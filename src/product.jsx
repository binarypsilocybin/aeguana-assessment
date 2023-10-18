import { formatPrice } from "./utils/formatPrice";
import { BsFillBasket2Fill } from "react-icons/bs";

const Product = ({ product, onAddToCart }) => {
  return (
    <>
      <div className="card">
        <section className="card__image">
          <img src={product.image} alt="product" />
        </section>
        <section className="card__text">
          <h5 className="card__title">{product.title}</h5>

          <div className="card__actions">
            <p className="card__price">{formatPrice(product.price)}</p>
            <button
              className="card__button"
              onClick={() => onAddToCart(product)}
            >
              <BsFillBasket2Fill />
              Add
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
