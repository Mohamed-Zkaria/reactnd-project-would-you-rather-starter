import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Nav(props){
    const {users} = props;
    const {authedUser} = props

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex flex-row">
                <div className="d-flex flex-row justify-content-around">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/add">New Question</Link>
                    <Link className="nav-link" to="/Leaderboard">Leader Board</Link>
                </div>
                {
                    users && authedUser &&        
                    <div>
                        <span>Hello, {users[authedUser].name} <img src={`${users[authedUser].avatarURL}`} style={{width: "50px", borderRadius: "50%"}} alt={`${users[authedUser].name} Avatar`}/></span>
                    </div>
                }
                {
                    authedUser ? 
                    <div>
                        <Link className="nav-link" to="/logout">logout</Link>
                    </div>
                    : 
                    <div>
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                }
            </div>
        </nav>
    )
}

function mapStateToProps({users, authedUser}){
    return {
        users, authedUser
    }
}
export default connect(mapStateToProps)(Nav);