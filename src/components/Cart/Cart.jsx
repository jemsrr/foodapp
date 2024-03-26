import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/Cart-Context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeUtem(id)
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItem = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      <div className="mx-[30%] p-10 bg-slate-500 rounded-3xl">
        {cartItem}
        <div className="font-bold text-2xl flex justify-between">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div>
          <button
            onClick={props.onHideCart}
            className=" bg-green-600 w-32 m-4 p-2 rounded-xl"
          >
            Close
          </button>
          {hasItems && (
            <button className=" bg-green-600 w-32 m-4 p-2 rounded-xl">
              Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
