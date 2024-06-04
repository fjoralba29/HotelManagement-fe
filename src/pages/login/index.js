import LoginForm from './login-form/Login'
import { Link } from 'react-router-dom'
import { StyledLoginRoot, StyledFormRoot, StyledHead, StyledForm, StyledLabel, StyledInput, StyledButton} from './styles'
import * as routeNames from "../../utilities/constants";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {

    return (
        <StyledLoginRoot>
            <StyledFormRoot>
                <StyledHead>
                    <h1>Welcome!</h1>
                    <h4>Please enter your credentials!</h4>
                </StyledHead>
                <LoginForm/>
            </StyledFormRoot> 
        </StyledLoginRoot>
    );
}

export default Login