import React from "react";
import { connect } from "react-redux";
import { Link, Redirect} from "react-router-dom";

class Question extends React.Component{

    render(){
        const {questions, authedUser , questionId, users} = this.props;
        
        const question = questions[questionId];

        if(!question){
            return <Redirect to="/404" />
        }
        
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
        } else {
            firstOptionClass += " alert alert-secondary";
            secondOptionClass += " alert alert-secondary";
        }
        let optionOneVoters = questions[questionId].optionOne.votes.length;
        let optionTwoVoters = questions[questionId].optionTwo.votes.length;

        return(
            <div className="container d-flex flex-column justify-content-between text-center">
                <div className="card">
                    <div className="card-body">
                        <img className="card-img-top" src={`${users[questions[questionId].author].avatarURL}`} style={{width: "25%"}} alt={`${users[questions[questionId].author].name} avatar`} />
                        <h5 className="card-title">{`${questions[questionId].author} Asks:`}</h5>
                        <h6>Would you rather?</h6>
                        <p className={firstOptionClass}>{questions[questionId].optionOne.text}</p>
                        <p>total people answered: {questions[questionId].optionOne.votes.length} in percentage: {Math.round((optionOneVoters/(optionOneVoters + optionTwoVoters)) * 100) || 0}%</p>
                        <p className={secondOptionClass}>{questions[questionId].optionTwo.text}</p>
                        <p>total people answered: {questions[questionId].optionTwo.votes.length}  in percentage: {Math.round((optionTwoVoters/ (optionOneVoters + optionTwoVoters)) * 100) || 0 }%</p>
                        <p className="card-text"><Link className="nav-link" to={`/question/${questionId}`}>View poll</Link></p>
                        {!userAnswred &&<p className="card-text"><Link className="nav-link" to={`/question-answer/${question.id}`}>Answer poll</Link></p>}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, props){
    let {questionId} = props.match ? props.match.params : props;
    return {
        questions,
        authedUser,
        questionId,
        users
    }
}


export default connect(mapStateToProps)(Question);