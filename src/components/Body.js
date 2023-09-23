import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listRes, setListRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log();
    setListRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              //Filter
              // Search Text
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* not using keys (not recommendable) <<<< use index as keys  <<<<<<<<<<<< use unique id as key(best Practice) */}

        {listRes.map((restro) => (
          <RestaurantCard key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
