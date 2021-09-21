import React from "react";
import { connect } from "react-redux";

class Question extends React.Component{

    render(){
        const {questions, authedUser} = this.props;
        // const {questionId} = this.props;
        // console.log({questionId})
        return(
            <h2>View Question</h2>
        )
    }
}

function mapStateToProps({questions, authedUser}, props){
    let {questionId} = props.match.params;
    console.log({props});
    return {
        questions,
        authedUser,
        questionId
    }
}


export default connect(mapStateToProps)(Question);