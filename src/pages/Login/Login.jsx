import { useState } from "react";
import { Link } from "react-router-dom";
import GetLogin from "../../shared/hooks/GetLogin";
import { useDispatch } from "react-redux";
import "./login.sass";


const Login = () => {
  
  const [loginDetail, setLoginDetail] = useState({ email: "", password: "" });
  const dispatch=useDispatch()  
  const OnSubmitLogin = async (event) => {
    event.preventDefault();
    dispatch(GetLogin(loginDetail));
  };

  const onTextBox = (event) => {
    const emailAndPassword = { ...loginDetail };
    emailAndPassword[event.target.id] = event.target.value;
    setLoginDetail(emailAndPassword);
  };
  return (
    <div className="login-form">
      <h2>User Login</h2>
      <form onSubmit={OnSubmitLogin}>
        <label>Email Address :</label>{" "}
        <input
          className="form-group input"
          type="email"
          id="email"
          required
          onInput={onTextBox}
        />
        <label>Password :</label>
        <input
          className="form-group input"
          type="password"
          id="password"
          required
          onInput={onTextBox}
        />
        <button type="submit">Submit</button>
        <p>
          Not a Member ? <Link to="/registration">SignUp</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
