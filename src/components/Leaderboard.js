import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";


class Leaderboard extends React.Component{
    render(){
        const {users, authedUser} = this.props
        if(!authedUser ){
            return <Redirect to="/login"/>
        }
        return (
            <div className="container d-flex flex-column justify-content-between text-center">
                <h2>Leaderboard</h2>
                {
                    users && Object.keys(users).sort((firstUser, secondUser)=>{
                        let totalRankFirstUser = users[firstUser].questions.length + Object.keys(users[firstUser].answers).length;
                        let totalRankSecondtUser = users[secondUser].questions.length + Object.keys(users[secondUser].answers).length;
                        return totalRankSecondtUser - totalRankFirstUser; 
                    }).map(user => {
                        return (
                            <div className="card" key={users[user].id}>
                                <img className="card-img-top" src={`${users[user].avatarURL}`} alt={`${users[user].name} avatar`} />
                                <div className="card-body">
                                    <h5 className="card-title">{users[user].name}</h5>
                                    <p className="card-text">Questions asked: {users[user].questions.length}</p>
                                    <p className="card-text">Answers given: {Object.keys(users[user].answers).length}</p>
                                    <p className="card-text">total: {users[user].questions.length + Object.keys(users[user].answers).length}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}){
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard);