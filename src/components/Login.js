import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { handleLogin } from "../actions/shared";


class Login extends React.Component{
    state = {
        userId: "",
        logged: false
    }

    handleSelectChange = (e)=>{
        this.setState(()=>{
            return { 
                userId: e.target.value
            }
        })

    }

    handleSubmission = (e) => {
        e.preventDefault()
        
        let {userId} = this.state;

        this.props.dispatch(handleLogin(userId))
                
        this.setState({logged: true});
    }


    render(){
        const {users} = this.props;
        const {authedUser} = this.props;        
        
        if(authedUser || this.state.logged){
            return <Redirect to="/"/>
        }

        return (       
            <div className="container d-flex flex-column justify-content-evenly">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmission}>
                    <select defaultValue="1" className="form-select" aria-label="Default select example" onChange={this.handleSelectChange}>
                        <option disabled value="1">Choose Name to login</option>
                        {
                            users && Object.keys(users).map(key=>{
                                return (
                                    <option value={users[key].id} key={users[key].id}>{users[key].name}</option>
                                )
                            })
                        }
                    </select>
                    <button className="btn btn-block btn-success" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users, setAuthedUser}){
    return {
        users,
        setAuthedUser
    }
}

export default connect(mapStateToProps)(Login);