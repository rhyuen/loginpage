import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Signup = () => {   
    return (
        <div>
            Signup<br/>
            Already have an account?  Login <Link to = "/">here</Link>.
        </div>
    );
};

export default Signup;