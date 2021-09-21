import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class Home extends React.Component{

    render(){

        const {questions, authedUser} = this.props
        let answredQuestions = [];
        let notAnswredQuestions = [];
        if(!authedUser ){
            return <Redirect to="/login"/>
        }

        if(questions){
            answredQuestions = Object.keys(questions).filter( questionKey=>{
                return questions[questionKey].optionOne.votes.includes(authedUser) || questions[questionKey].optionTwo.votes.includes(authedUser);
            });

            notAnswredQuestions = Object.keys(questions).filter( questionKey=>{
                return !questions[questionKey].optionOne.votes.includes(authedUser) && !questions[questionKey].optionTwo.votes.includes(authedUser);
            });

        }

        return(
            <div className="container d-flex flex-column justify-content-between text-center">
                {
                    <div>
                        <h3>Answerd</h3>
                        {questions && answredQuestions.map(questionKey => {
                            return (
                                <div className="card" key={questionKey}>
                                    <div className="card-body">
                                        <h5 className="card-title">{`${questions[questionKey].author} Asks:`}</h5>
                                        <p className="card-text">{questions[questionKey].optionOne.text}</p>
                                        <p className="card-text">{questions[questionKey].optionTwo.text}</p>
                                        <p className="card-text"><Link className="nav-link" to={`/question/${questionKey}`}>View poll</Link></p>
                                    </div>
                                </div>
                            )
                        })}
                        <h3>Not answred</h3>
                        {questions && notAnswredQuestions.map(questionKey => {
                            return (
                                <div className="card" key={questionKey}>
                                    <div className="card-body">
                                        <h5 className="card-title">{`${questions[questionKey].author} Asks:`}</h5>
                                        <p className="card-text">{questions[questionKey].optionOne.text}</p>
                                        <p className="card-text">{questions[questionKey].optionTwo.text}</p>
                                        <p className="card-text"><Link className="nav-link" to={`/question/${questionKey}`}>View poll</Link></p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps({questions, authedUser}){
    return {
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Home);