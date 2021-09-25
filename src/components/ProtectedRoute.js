import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";


class ProtectedRoute extends React.Component{

    render(){
        const {component: Component, exact, path, authedUser} = this.props
        return(
            <Route 
                render={(props)=>(
                    authedUser ? 
                        <Component {...props} />
                        :
                        <Redirect 
                        to={{
                            pathname: "/login",
                            state: {
                                from: this.props.location
                            }
                        }}/>
                )} 
                path={path} 
                exact={exact} />
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(ProtectedRoute);