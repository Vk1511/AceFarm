import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";
import SignupForm from "../components/SignUp/SignupForm";
import { useParams } from "react-router-dom";
import "./ScreenStyle.css";

function AuthScreen() {
  let params = useParams();
  return (
    <div className="common_flex auth_screen_container">
        <div className="auth_box">
            <div className="auth_design linear_back flex_and_align">
                <h1>Welcome Back</h1>
                <span className="auth_box_info">To connect with us, please SingUp with your personal info.</span>
                <button className="login_btn auth_box_btn">
                  {
                    params.type === "login" ? "SIGN UP" : "SIGN IN"
                  }
                </button>
            </div>
            <div className="auth_form">
              {
                params.type === "login" ? <LoginForm /> : <SignupForm />  
              }
            </div>
        </div>
    </div>
  )
}

export default AuthScreen