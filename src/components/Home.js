import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Home extends React.Component{
    
    handleTabs = (e) => {
        let answeredTab = document.getElementById("Answered");
        let notAnsweredTab = document.getElementById("Not-answered");
        let btnId = e.target.id;
        switch(btnId){
            default:
            case "show-answred":
                answeredTab.style.display = "block";
                notAnsweredTab.style.display = "none";
            break;
            case "show-not-answered":
                answeredTab.style.display = "none";
                notAnsweredTab.style.display = "block";                
            break
        }
    }

    render(){

        const {questions, authedUser} = this.props
        let answredQuestions = [];
        let notAnswredQuestions = [];

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
                        <div>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="btn btn-primary" id="show-answred" onClick={this.handleTabs}>Answered</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="btn btn-primary" id="show-not-answered" onClick={this.handleTabs}>Not answered</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="Answered" >                                                
                                    <h3>Answerd</h3>
                                    {questions && answredQuestions.sort((firstQuestion, secondQuestion)=>{
                                        return questions[secondQuestion].timestamp - questions[firstQuestion].timestamp;
                                    }).map(questionKey => {
                                        return <Question questionId={questionKey} key={questionKey}/>
                                    })}
                                </div>
                                <div className="tab" id="Not-answered" style={{display:"none"}}>
                                    <h3>Not answred</h3>
                                    {questions && notAnswredQuestions.sort((firstQuestion, secondQuestion)=>{
                                        return questions[secondQuestion].timestamp - questions[firstQuestion].timestamp;
                                    }).map(questionKey => {
                                        return <Question questionId={questionKey} key={questionKey}/>
                                    })}
                                </div>
                            </div>

                        </div>

                        
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps({questions, authedUser, users}){
    return {
        questions,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Home);