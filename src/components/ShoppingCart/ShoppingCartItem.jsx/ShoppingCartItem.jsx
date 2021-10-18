import { useEffect, useState } from 'react';
import { ShoppingCartItemCard } from '../StyledCart';

const ShoppingCartItem = ({ item, setShoppingCart, shoppingCart }) => {
  // const [quantity, setQuantity] = useState(null);
  const [classes, setClasses] = useState(true);
  useEffect(() => {
    setClasses((prev) => !prev);
  }, [shoppingCart]);
  if (!item) {
    return null;
  }
  return (
    <ShoppingCartItemCard className={`${classes}`}>
      <button
        onClick={() => {
          setShoppingCart((prev) => {
            let temp = JSON.parse(JSON.stringify([...prev]));
            console.log(item.quantity);
            let index = temp.findIndex(
              (pItem) => Number(pItem.id) === Number(item.id)
            );
            let currentQuantity = --temp[index].quantity;
            console.log(currentQuantity);
            index % 2 === 0 ? setClasses(true) : setClasses(false);
            if (currentQuantity === 0) {
              temp = prev.filter(
                (pItem) => Number(pItem.id) !== Number(item.id)
              );
            }
            return temp;
          });
        }}
      >
        x
      </button>

      <p>{item.item}</p>
      <p>{item.quantity}</p>
      <p>${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
    </ShoppingCartItemCard>
  );
};

export default ShoppingCartItem;
