import React, { Fragment } from "react";
import appLogo from "../../assets/download.png"
import HeaderCarButton from "./HeaderCarButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className="flex justify-between bg-red-700 px-44 py-6">
        <h1 className=" text-4xl font-bold text-white">ReactMeals</h1>
        <HeaderCarButton onClick={props.onShowCart}/>
      </header>
    </Fragment>
  );
};

export default Header;
