import { useState, useEffect } from "react";
import productCardStyles from "../../assets/styles/components/profile/ProductCard.module.css";

import Heart from "../svg/Heart";

import etcIcon from "../../assets/images/svg/etc.svg";
import userImage from "../../assets/images/example/Img.png";
import bg from "../../assets/images/example/bg.png";

function ProductCard({ type }) {
  const [isHeartSelected, setIsHeartSelected] = useState(false);
  const [sundry, setSundry] = useState(false);

  useEffect(() => {
    setSundry(type === "collection");
  }, [type, sundry]);

  const toggleHeart = () => {
    setIsHeartSelected(!isHeartSelected);
  };

  return (
    <div className={`${!sundry && productCardStyles.card} relative`}>
      {!sundry && (
        <div className={productCardStyles.card_header}>
          <div className={productCardStyles.card_header__users}>
            <div style={{ zIndex: 2 }}>
              <img src={userImage} alt="user" />
            </div>
            <div style={{ zIndex: 1, marginLeft: -14 }}>
              <img src={userImage} alt="user" />
            </div>
          </div>
          <button className="cursor-pointer">
            <img src={etcIcon} alt="icon" />
          </button>
        </div>
      )}
      <div
        style={{ height: sundry ? "296px" : "254px" }}
        className={productCardStyles.card_image}
      >
        <img src={bg} alt="bg" />
      </div>

      <div
        className={
          sundry
            ? productCardStyles.card_content_collection
            : productCardStyles.card_content
        }
      >
        <div>
          <h6 className={productCardStyles.card_title}>Front Desk</h6>
          <p className={productCardStyles.card_price}>
            from <span>$0.99 USD</span>
          </p>
        </div>
        {sundry && (
          <div className={productCardStyles.card_header__users}>
            <div style={{ zIndex: 2 }}>
              <img src={userImage} alt="user" />
            </div>
            <div style={{ zIndex: 1, marginLeft: -14 }}>
              <img src={userImage} alt="user" />
            </div>
          </div>
        )}
        <div className="cursor-pointer" onClick={toggleHeart}>
          <Heart selected={isHeartSelected} />
          <span>99</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
