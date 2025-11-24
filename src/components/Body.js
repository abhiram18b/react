import RestaurantCard from "./RestaurantCard";
import { RESTUARANTS_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTUARANTS_URL);
    const data = await response.json();
    console.log(data.data);
    console.log(data.data.cards);
    const { restaurants } =
      data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
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
          <Link
            key={resData.info.id}
            to={`/restaurants/${resData.info.id}`}
            className="res-card-link"
          >
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
