import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { handleAddQuestion, handleAddQuestionToUser } from "../actions/shared";
import {formatQuestion} from "../utils/_DATA";

class AddQuestion extends React.Component{
    state = {
        optionOne: "",
        optionTwo: "",
        redirectToHome: false
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        if(this.state.optionOne !== "" && this.state.optionTwo !== ""){
            const authedUser = this.props.authedUser;
            const optionOneText = this.state.optionOne;
            const optionTwoText = this.state.optionTwo;
            let author = authedUser;

            let question = formatQuestion({optionOneText, optionTwoText, author});

            let questionToAddquestion = {[question.id]: question }   
            this.props.dispatch(handleAddQuestion(questionToAddquestion));
            this.props.dispatch(handleAddQuestionToUser(question.id, author))
            this.setState({redirectToHome: true});
        }
    }

    render(){
        
        if(this.state.redirectToHome){
            return <Redirect to="/"/>

        }

        return(
            <div className="container d-flex flex-column justify-content-between text-center">
                <h1>ADD Question</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Enter first option" value={this.state.optionOne} name="optionOne" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter second option" value={this.state.optionTwo} name="optionTwo" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-block btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion);