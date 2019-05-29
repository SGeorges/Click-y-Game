import React from "react";
import "./style.css";

function NavBar(props) {
    return(
        <nav className="navbar navbar-light">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li className="">{props.nav_msg}</li>
                <li>Score: {props.score} | Top Score: {props.top_score}</li>
            </ul>
        </nav>
    );
}

export default NavBar;