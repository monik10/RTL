// Signup.tsx
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
// import Carousal from "../carousal/Carousal";

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
const Login = () => {
  type AuthType = {
    email: string;
    password: string;
  };
  const [authData, setAuthData] = useState<AuthType>({
    email: "",
    password: "",
  });

  const { email, password } = authData;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <section className="main-container">
    <article className="inner-container">
      <div className="carousal-container">
       {/* <Carousal/> */}
      </div>
      <div className="signup-container">
     
      <div className="signup-main-container">
      <div className="form-container">
        <h2 className="signup">Login</h2>
        <form onSubmit={handleSubmit} className="form-inner-container">
          <div>
            <TextField
              id="text-line"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              label="Email"
            />
          </div>
          <div>
            <TextField
              id="text-line"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
              label="Password"
            />
          </div>
          <div>
            <Button
              style={{ width: "100%", background: "#434db8" }}
              variant="contained"
              type="submit" 
            >
              Login
            </Button>
          </div>

          <div className="signup-link">
            <a href="/">Don't have an account? Sign Up</a>
          </div>
        </form>
      </div>
    </div>
       </div>
    </article>
  </section>
   
  );
};

export default Login;
