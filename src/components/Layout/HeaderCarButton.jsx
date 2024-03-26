import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";

const HeaderCarButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button
      onClick={props.onClick}
      className="  bg-red-900 py-2 px-8 rounded-full flex gap-5 text-2xl text-white align-middle"
    >
      <span className="">&#xf07a;</span>
      <span className="">Your Cart</span>
      <span className=" bg-red-600 px-4 rounded-full">{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCarButton;
