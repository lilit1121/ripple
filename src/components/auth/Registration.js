import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import {
  schemaForCreator,
  schemaForCompany,
} from "../../utils/ValidationScheme";
import registration from "../../assets/styles/components/auth/Registration.module.css";
import "../../assets/styles/views/Auth.css";
import Modal from "../base/modal";

function Registration({ type }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues =
    type === "creator"
      ? {
          fullName: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }
      : {
          companyName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    openModal();
    // resetForm();
  };
  return (
    <div className="auth-container">
      <AuthHeader
        title="Sign Up"
        description="Take the next step and sign up to your account"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={
          type === "creator" ? schemaForCreator : schemaForCompany
        }
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={registration.input_container}>
              {type === "creator" && (
                <div>
                  <AuthInput
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    placeholder="Enter your full name"
                    type="text"
                    value={values.fullName}
                    handleChange={(e) => setFieldValue("fullName", e)}
                    as={Field}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error-message"
                  />
                </div>
              )}
              {type === "creator" && (
                <div>
                  <AuthInput
                    id="userName"
                    name="userName"
                    label="Username"
                    placeholder="Enter your username"
                    type="text"
                    value={values.userName}
                    handleChange={(e) => setFieldValue("userName", e)}
                    as={Field}
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="error-message"
                  />
                </div>
              )}
              {type === "company" && (
                <div>
                  <AuthInput
                    id="companyName"
                    name="companyName"
                    label="Company Name"
                    placeholder="Enter your company name"
                    type="text"
                    value={values.companyName}
                    handleChange={(e) => setFieldValue("companyName", e)}
                    as={Field}
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="error-message"
                  />
                </div>
              )}
              <div>
                <AuthInput
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  handleChange={(e) => setFieldValue("email", e)}
                  as={Field}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <AuthInput
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  handleChange={(e) => setFieldValue("password", e)}
                  as={Field}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <AuthInput
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type="password"
                  value={values.confirmPassword}
                  handleChange={(e) => setFieldValue("confirmPassword", e)}
                  as={Field}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <button className="blue-btn" type="submit">
              Submit and Continue
            </button>
          </form>
        )}
      </Formik>

      <p className={registration.login}>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>

      <Modal
        title="SIgn-Up Successful"
        description="Please check your email to to verify your account."
        handleOpen={open}
        handleClose={handleClose}
        type="success"
      >
        <div className={registration.button_container}>
          <button className={`secondary-btn ${registration.button}`}>
            Back
          </button>
          <button className={`blue-btn ${registration.button}`}>
            Verify Account
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Registration;
