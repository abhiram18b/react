import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [list, setList] = useState(resList);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        onClick={() => {
          const filtered = list.filter((res) => Number(res.info.avgRating) > 4);
          setList(filtered);
        }}
      >
        Top Rated Res
      </button>

      <div className="res-container">
        {list.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
