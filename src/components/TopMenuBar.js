import React from "react";
import { NavLink } from "react-router-dom";

function TopMenuBar() {
    return (
        <nav>
            <div className="nav-container">
                <h4>HorsePlanet</h4>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blog" activeClassName="active-link">Blog</NavLink>
                    </li>

                    <li>

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenuBar;
