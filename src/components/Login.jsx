import React from "react";
import NavDesign from "./NavDesign"; // Assuming this component exists and renders your navigation bar
import './Login.css';
const Login = () => {
    return (
        <>
            {/* Import and use your custom CS   S file here, e.g., './Login.css' */}
            <NavDesign />
            <div className="login-container">
                <div className="leftma">
                    {/* Add content or design elements for the left section as needed */}
                    {/* <h2>Welcome!</h2>
                    <p>Please enter your credentials to log in.</p> */}
                </div>
                <div className="rightm">
                    <h2 style={{color:"white"}}>Login</h2>
                    <form className="login-form">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                            autocomplete="username"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                        />
                        <button type="submit">Log In</button>
                        <a href="/forgot-password" className="forgot-password" style={{color:"white"}}>
                            Forgot password?
                        </a>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
