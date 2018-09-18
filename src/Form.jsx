import React, {Component} from "react";
import styled from "styled-components";

export default ({onFormSubmit, onInputChange, usernameValue, passwordValue}) => {
    return (
        <form onSubmit = {onFormSubmit}>
            <div>
                <input type = "text" 
                    placeholder = "Username" 
                    name = "username"
                    onChange = {onInputChange}
                    value = {usernameValue}/>
            </div>
            <div>
                <input type = "text" 
                    placeholder = "Password" 
                    name = "password"
                    onChange = {onInputChange}
                    value = {passwordValue}/>
            </div>
            <div>
                <input type = "submit" value = "Login"/>
            </div>
        </form>
    );
}