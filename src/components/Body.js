import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "./utils/mockData";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listRes, setListRes] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListRes(filteredList)
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
