import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { handleaAnswerQuestion, handleAddAnswerToUser } from "../actions/shared";


class AnswerQuestion extends React.Component{
    state = {
        optionSelected: "", 
        redirectToQuestion: false,
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.state.optionSelected){
            this.props.dispatch(handleaAnswerQuestion(this.props.authedUser, this.props.questionId, this.state.optionSelected));
            this.props.dispatch(handleAddAnswerToUser(this.props.questionId, this.state.optionSelected, this.props.authedUser))
            this.setState({redirectToQuestion: true});
        }
        console.log({state: this.state})
    }
    
    handleChange = (e) => {
        let result = e.target.value;
        console.log({result})
        this.setState({optionSelected: result})
    }
    
    render(){
        const {questions, questionId} = this.props;

        if(this.state.redirectToQuestion){
            return <Redirect to={`/question/${questionId}`} />
        }

        const question = questions[questionId];

        return(
            <div className="container d-flex flex-column justify-content-between text-center">
                <h2>Would you rather</h2>
                <form onSubmit={this.handleSubmit}>
                    <p className="">
                        <label htmlFor="optionOne">{question.optionOne.text}: </label>
                        <input type="radio" name="would-you-rather" value="optionOne" id="optionOne" onChange={this.handleChange} />
                        
                    </p>
                    <p>
                        <label htmlFor="optionTwo">
                            {question.optionTwo.text}:
                            <input type="radio" name="would-you-rather" value="optionTwo" id="optionTwo" onChange={this.handleChange}/>
                        </label>
                        
                    </p>

                    <button type="submit" className="btn btn-block btn-success">Answer</button>
                </form>
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

export default connect(mapStateToProps)(AnswerQuestion);