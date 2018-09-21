import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

class Forgot extends Component{
    state = {

    }

    handleChange = e => {

    }

    handleSubmit = e => {

    }

    render(){
        return (
            <div>
                <input type = "email" placeholder = "email address"/><br/>
                <input type = "submit" value = "Submit"/>
                <div>
                    I had an <Link to = "/">epiphany</Link>.
                </div>
            </div>
        );
    }
}

export default Forgot;