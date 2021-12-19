import React from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "../components/DateTimePicker";
import RButton from "../components/form/RButton";
import RInputText from "../components/form/RInputText";

class Login extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            userName: ""
        }
    }

    login(){
        cookie.save("cred", "sample-token")
        history.pushState("", null, "/")
        location.reload()
    }

    render() {
        return (
            <div className="container">
                <h1>Login Page</h1>
                <DateTimePicker />
                <RInputText id="text-input" type="url" value={this.state.userName} onChange={(e) => this.setState({userName: e.target.value})} placeholder="Hai" label="Username" />
                <RButton onClick={this.login.bind(this)}>Login</RButton>
            </div>
        )
    }
}
export default function(props) {
    const navigate = useNavigate();
    return <Login {...props} navigate={navigate} />;
}