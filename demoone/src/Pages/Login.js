import { Link } from "react-router-dom"

export const Login =()=>{
    return<div>
        <h1>Login Page</h1>
        <Link to="/register">Register</Link>
        <Link to="/forgot-password">Forgot Password?</Link>
    </div>
}