import filter from "../../assets/styles/components/base/Filter.module.scss"

function Filter({ img, content }) {
  return (
    <div className={filter.filter}>
      <img src={img} alt="icon" />
      <p>{content}</p>
    </div>
  );
}

export default Filter;
