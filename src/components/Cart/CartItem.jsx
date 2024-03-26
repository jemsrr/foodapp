const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className=" flex justify-between p-6">
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>{price}</span>
          <span>x {props.amount}</span>
        </div>
      </div>
      <div className=" flex justify-end gap-3">
        <button
          className=" w-10 h-12 text-4xl p-2 bg-green-500"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className=" w-10 h-12 text-4xl bg-green-500"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
