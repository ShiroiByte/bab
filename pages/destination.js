import GetFont from "@/components/GetFont";
import Header from "@/components/Header";
import LeftText from "@/components/LeftText";
import RestaurantClickable from "@/components/RestaurantClickable";
import Space from "@/components/Space";
import { db } from "../utils/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

function Destination() {
  const [restaurants, setRestaurants] = useState([]);

  let count = 1;

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setRestaurants(data);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <>
      <GetFont />
      <div>
        <Header />
        <Space />
        <LeftText text={"Pick your desired location"} />
        {restaurants.map((restaurant) => (
          <RestaurantClickable
            key={restaurant.name}
            url={"restaurants/res" + count++}
            name={restaurant.name}
          />
        ))}
      </div>
    </>
  );
}

export default Destination;
