import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-Context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`
    const addTOCartHandler = amount =>{
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }
  return (
    <>
    <li className=" py-6 flex justify-between">
      <div>
        <h3 className=" text-2xl font-bold">{props.name}</h3>
        <div>{props.description}</div>
        <div className=" text-3xl font-extrabold text-yellow-200">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addTOCartHandler}/>
      </div>
    </li>
    <hr />
    </>
  );
};

export default MealItem;
