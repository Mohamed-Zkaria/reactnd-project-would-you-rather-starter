import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class Question extends React.Component{

    render(){
        const {questions, authedUser , questionId} = this.props;
        
        if(!authedUser){
            return <Redirect to="/login" />
        }

        const question = questions[questionId];
        
        const userAnswred = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
        let firstOptionClass = "card-text";
        let secondOptionClass = " card-text";
        if(userAnswred){
            if(question.optionOne.votes.includes(authedUser)){
                firstOptionClass += " alert alert-success";
                secondOptionClass += " alert alert-secondary";
            }

            if(question.optionTwo.votes.includes(authedUser)){
                firstOptionClass += " alert alert-secondary";
                secondOptionClass += " alert alert-success";
            }
        }

        return(
            <div className="container d-flex flex-column justify-content-between text-center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{`${question.author} Asks:`}</h5>
                        <p className={firstOptionClass}>{question.optionOne.text}</p>
                        <p className={secondOptionClass}>{question.optionTwo.text}</p>
                        {!userAnswred &&<p className="card-text"><Link className="nav-link" to={`/question-answer/${question.id}`}>Answer poll</Link></p>}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, props){
    let {questionId} = props.match.params;
    return {
        questions,
        authedUser,
        questionId
    }
}


export default connect(mapStateToProps)(Question);