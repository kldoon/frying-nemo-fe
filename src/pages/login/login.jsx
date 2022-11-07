import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/input/input";
import { LoginUser } from "../../components/services/user";


const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {

    if (props.user?.id) {
      navigate('/login', { replace: true });
    }
  }, []);



  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if (email && password) {
      const user = LoginUser(email, password);
      if (email && password) {
        const user = LoginUser(email, password);
        // If Successful login, go to view page
        if (user) {
          props.setUser(user);
          navigate('/view', { replace: true });
        } else {
          alert("Invalid Email or password ! try again please ");
        }

      }
    }
    };


    return (
      <div className="login-page">
        <form onSubmit={handleLogin}>
        <div className="cover">
          <h1>Hi :) </h1>
          <h3>Login In with your email and password to see our menu ! </h3>
          <img src="" alt="" />
        </div>

          <div className="inputs">
            <Input
              label="Enter Your Email"
              name="Email"
              placeholder="email@Example.com"
              type="email"

            />
            <Input
              label="Enter Your password "
              name="password"
              type="password"
            />
          </div>
          <div className="LOGIN" >
          <button className="nemo-button" type="button
          "  onClick={handleLogin}>submit</button>
          </div>
        </form>
      </div >
    );

  };
  export default Login;