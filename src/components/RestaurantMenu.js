import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import { RESTUARANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuItemCard from "./MenuItemCard";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(RESTUARANT_MENU_URL(resId));
    const data = await response.json();
    console.log(data);
    setResInfo(data);
  };
  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo?.data?.cards[2]?.card.card.info);

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[2]?.card.card.info;
  // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  const { cards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const renderingCards = cards.map((itemCard, index) => {
    const { title, itemCards } = itemCard?.card?.card ?? {};
    if (!title) return <Fragment key={"empty" + index}></Fragment>;
    return (
      <div key={title}>
        <h3>{title}</h3>
        <ul className="item-list">
          {itemCards.map((item) => {
            const { info } = item?.card;
            return <MenuItemCard key={info.id} itemInfo={info} />;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <h2>{name}'s Menu</h2>
      <div>{renderingCards}</div>
    </div>
  );
};

export default RestaurantMenu;
