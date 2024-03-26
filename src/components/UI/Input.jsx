import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className=" w-40 flex justify-between">
      <label htmlFor={props.input.id} className={props.className}>
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="text-black font-bold p-2 rounded-2xl"
      />
    </div>
  );
});

export default Input;
