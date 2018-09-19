import React, {Component} from "react";
import axios from "axios";
import Form from "./Form.jsx";

class App extends Component{

    state = {        
        username: "",
        password: ""
    }
    
    handleInputChange = e => {
        let currInputValue = e.currentTarget.value;
        let currInputName = e.currentTarget.name;
        this.setState(prevState => {  
            let change = {};
            switch(currInputName){
                case "username":
                    change = {username: currInputValue};
                    break;
                case "password":
                    change = {password: currInputValue};
                    break;                
            }                          
            return Object.assign(prevState, change);
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        console.log("Logging in.");       
        const url = "http://localhost:5789/login";
        const username = this.state.username;
        const password = this.state.password;

        axios.post(url, {
            username: username,
            password: password
        }).then(res => {
            console.log(res)
            this.setState(prevState => {
                return {
                    ...prevState,
                    username: "", 
                    password: ""
                };
            })
            window.location.assign("http://localhost:8080");
        }).catch(err => {
            if(err.response.status === 401){
                console.log("Incorrect password.")
                this.setState(prevState => {
                    return {
                        ...prevState,
                        password: ""
                    };
                });
            }
            if(err.response.status === 404){
                console.log("User does not exist.");
                this.setState(prevState => {
                    return {
                        ...prevState,
                        username: "",
                        password: ""
                    };
                });
            }
        });       
    }
    
    render(){                
        return (
            <div className = "root">    
                <h2>Login</h2>                                             
                <Form 
                    onInputChange = {this.handleInputChange}
                    usernameValue = {this.state.username}
                    passwordValue = {this.state.password}
                    onFormSubmit = {this.handleFormSubmit}/>
            </div>
        );
    }
}

export default App;