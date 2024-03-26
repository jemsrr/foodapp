import React, { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

// [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoddeing, setIsLoddeing] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {

      const response = await fetch(
        "https://react-http-49-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const loadMeals = [];

      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadMeals);
    };
    fetchMeals() 
    setIsLoddeing(false);
  }, []);

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className=" mx-[10%] p-10 ">
      {isLoddeing ? (
        <Card>
          <p className=" text-red-200 font-semibold">Lodding........</p>
        </Card>
      ) : (
        <Card>
          <ul>{mealList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
