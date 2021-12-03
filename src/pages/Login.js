import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div id="pageContainer">
            <h1>Login</h1>
            <Link to="/blog">
                <button type="button">Inloggen</button>
            </Link>
            <p>
            <Link to="/"> Back to home </Link></p>

        </div>
    )
}

export default Login;