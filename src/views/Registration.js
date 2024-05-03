import { useState } from "react";
import AccountTypes from "../components/auth/AccountTypes";
import RegistrationComp from "../components/auth/Registration";

function Registration() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");

  const handleStepChange = () => {
    setStep(2);
  };

  const handleTypeChange = (type) => {
    setType(type);
  };

  return (
    <div>
      {step === 1 && (
        <AccountTypes
          handleTypeChange={handleTypeChange}
          handleStepChange={handleStepChange}
        />
      )}
      {step === 2 && <RegistrationComp type={type} />}
    </div>
  );
}

export default Registration;
