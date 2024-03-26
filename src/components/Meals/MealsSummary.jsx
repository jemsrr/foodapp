import React from "react";

const MealsSummary = (props) => {
  return (
    <div className="flex justify-center">
    <section className=" text-white text-center w-[50%] bg-slate-700 p-10 shadow-2xl rounded-xl relative">
      <h2 className=" text-3xl font-bold">Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
    </div>
  );
};

export default MealsSummary;
