import { Formik, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { socialMediaLogin } from "../constants/login";
import AuthHeader from "../components/auth/AuthHeader";
import AuthInput from "../components/auth/AuthInput";
import { loginSchema } from "../utils/ValidationScheme";
import login from "../assets/styles/views/Login.module.css";
import "../assets/styles/views/Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <AuthHeader
        title="Sign in"
        description="Take the next step and sign in to your account"
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember: false,
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={loginSchema}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={login.input_container}>
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
            </div>

            <div className={login.login_block}>
              <div className={login.login_block__remember}>
                <Field id="remember" name="remember" type="checkbox" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link className={login.login_block__recover} to="/">
                Recover password
              </Link>
            </div>
            <button className="blue-btn btn" type="submit">
              Sign In
            </button>
          </form>
        )}
      </Formik>
      <div className={login.login_block__or}>
        <div className={login.line} />
        or
        <div className={login.line} />
      </div>
      <div className={login.social_media_container}>
        {socialMediaLogin.map((data, index) => (
          <a className={login.social_media_btn} key={index} href={data.url}>
            <img src={data.icon} alt={data.alt} />
            {data.title}
          </a>
        ))}
      </div>

      <p className={login.signup}>
        You don’t have an account? <Link to="/registration">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
