import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex flex-row">
                <div className="d-flex flex-row justify-content-around">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/new-questions">New Question</Link>
                    <Link className="nav-link" to="/Leader-board">Leader Board</Link>
                </div>
                <Link className="nav-link" to="/logout">logout</Link>   
            </div>
        </nav>
    )
}