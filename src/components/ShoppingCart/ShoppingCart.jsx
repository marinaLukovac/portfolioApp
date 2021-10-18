import { ShoppingCartTable } from './StyledCart';

import { v1 as uuidv1 } from 'uuid';
import ShoppingCartItem from './ShoppingCartItem.jsx/ShoppingCartItem';

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  return (
    <ShoppingCartTable>
      {shoppingCart.length !== 0 ? (
        <>
          <h3 className="heading">
            <span>Delete</span>
            <span>Book Title</span>
            <span>Quantity</span>
            <span>Price</span>
          </h3>
          {shoppingCart.map((item) => (
            <ShoppingCartItem
              key={`${item.id}+${uuidv1()}`}
              item={item}
              setShoppingCart={setShoppingCart}
              shoppingCart={shoppingCart}
            />
          ))}
          <h3 className="total">
            <span>Total:</span>
            <span>
              $
              {shoppingCart
                .reduce(
                  (total, item) => total + item.quantity * Number(item.price),
                  0
                )
                .toFixed(2)}
            </span>
          </h3>
        </>
      ) : (
        <p>YOUR CART IS EMPTY...</p>
      )}
    </ShoppingCartTable>
  );
};

export default ShoppingCart;
