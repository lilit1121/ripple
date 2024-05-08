import { useState } from "react";
import AuthHeader from "../../components/auth/AuthHeader";
import UserSvg from "../svg/auth/User";
import accountTypesStyles from "../../assets/styles/components/auth/AccountTypes.module.scss";
import "../../assets/styles/views/Auth.scss";

function AccountTypes({ handleStepChange, handleTypeChange }) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: "I am a Creator",
      type: "creator",
      active: false,
    },
    {
      name: "I am an AI Company or Consumer",
      type: "company",
      active: false,
    },
  ]);

  const handleChange = (selectedType) => {
    const updatedTypes = accountTypes.map((type) => ({
      ...type,
      active: type.type === selectedType,
    }));
    handleTypeChange(selectedType);
    setAccountTypes(updatedTypes);
  };

  return (
    <div className={accountTypesStyles.account_types}>
      <AuthHeader
        title="Join as a Creator or AI Company / Consumer"
        description="Take the next step and sign up to your account"
      />
      <div className={accountTypesStyles.account_types_container}>
        {accountTypes.map((data, index) => (
          <label
            htmlFor={data.type}
            key={index}
            className={`${
              data.active ? accountTypesStyles.account_types__item_active : ""
            } ${accountTypesStyles.account_types__item}`}
          >
            <div>
              <UserSvg type={data.type} active={data.active} />
              <input
                onChange={() => handleChange(data.type)}
                name="type"
                id={data.type}
                type="radio"
                checked={data.active}
              />
            </div>
            <p>{data.name}</p>
          </label>
        ))}
      </div>
      <button onClick={handleStepChange} className="blue-btn btn">
        Continue Sign-Up
      </button>
    </div>
  );
}

export default AccountTypes;
