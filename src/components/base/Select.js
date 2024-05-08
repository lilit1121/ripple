import select from "../../assets/styles/components/base/select.module.scss"

function Select({ defaultValue, list }) {
  return (
    <select className={select.select} defaultValue={defaultValue}>
      {list.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
