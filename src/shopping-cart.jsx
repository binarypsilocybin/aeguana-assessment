import { formatPrice } from "./utils/formatPrice";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cart, products = [] }) => {
  const cartWithDetails = cart.map((item) => {
    const productDetails = products.find(
      (product) => product.id === item.productId
    );
    return {
      ...item,
      productImage: productDetails.image,
      productName: productDetails.name,
      productPrice: productDetails.price,
      totalProductPrice: productDetails.price * item.quantity,
    };
  });

  const totalCartPrice = cartWithDetails.reduce((total, currentItem) => {
    return total + currentItem.totalProductPrice;
  }, 0);

  return (
    <>
      <div className="shopping-cart">
        <h3>Order summary</h3>
        <p>You have {cart.length} products in your cart.</p>
        {cartWithDetails.length > 0 && (
          <>
            <div className="shopping-cart__content">
              {cartWithDetails.map((item) => (
                <div key={item.productId} className="shopping-cart__item">
                  <img src={item.productImage} alt="shopping-cart-image" />
                  <p>
                    {item.productName} ({formatPrice(item.productPrice)})
                  </p>
                  <p>{item.quantity}</p>
                  <p>{formatPrice(item.totalProductPrice)}</p>
                </div>
              ))}
            </div>
            <div className="shopping-cart__footer">
              Total {formatPrice(totalCartPrice)}
            </div>
          </>
        )}
      </div>
      <div className="shopping-cart__buttons">
        <button className="continue__shopping">Continue shopping</button>
        <Link to="/success">
          <button className="pay__collect">Pay & collect</button>
        </Link>
      </div>
    </>
  );
};

export default ShoppingCart;
