import productCard from "../../assets/styles/components/profile/ProductCard.module.css";

function ProductCard() {
  return (
    <div className={productCard.card}>
      <div>
        <img src="" alt="" />
      </div>
      <h6></h6>
      <div>
        <p>from <span>$0.99 USD</span></p>
      </div>
    </div>
  );
}

export default ProductCard;
