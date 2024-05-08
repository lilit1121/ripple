import Filter from "../base/Filter";

import filters from "../../assets/styles/components/profile/Filters.module.scss";

import arrows from "../../assets/images/svg/arrows.svg";
import dollar from "../../assets/images/svg/dollar.svg";
import icon from "../../assets/images/svg/icon.svg";
import text from "../../assets/images/svg/text.svg";
import figures from "../../assets/images/svg/figures.svg";

function Filters() {
  const filterItems = [
    { img: figures, content: "Category" },
    { img: text, content: "Collections" },
    { img: icon, content: "Type" },
    { img: dollar, content: "Price range" },
    { img: arrows, content: "Date added" }
  ];

  return (
    <div className={filters.filters}>
      <div>
        {filterItems.slice(0, 4).map((item, index) => (
          <Filter key={index} img={item.img} content={item.content} />
        ))}
      </div>
      <Filter img={filterItems[4].img} content={filterItems[4].content} />
    </div>
  );
}

export default Filters;
