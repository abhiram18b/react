import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    const { restaurants } =
      data.data.cards[4].card.card.gridElements.infoWithStyle;
    console.log(restaurants);
    setList(restaurants);
    setFilteredList(restaurants);
  };

  if (list.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => {
              const currSearch = searchQuery.toLowerCase();
              const filteredListBySearchQuery = list.filter((res) => {
                const resName = res?.info?.name.toLowerCase();
                return resName.includes(currSearch);
              });
              setFilteredList(filteredListBySearchQuery);
            }}
          >
            search
          </button>
        </div>

        <button
          onClick={() => {
            const filtered = list.filter(
              (res) => Number(res.info.avgRating) > 4
            );
            setList(filtered);
          }}
        >
          Top Rated Res
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
