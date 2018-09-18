import React, {Component} from "react";
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
        this.setState(prevState => {
            return {
                ...prevState,
                username: "",
                password: ""
            };
        });
    }
    
    render(){                
        return (
            <div className = "root">    
                <h2>Royu static</h2>  
                <h2>Cats are the best.</h2>  
                <h2>Dogs are okay though</h2>                           
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