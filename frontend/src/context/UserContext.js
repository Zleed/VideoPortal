import React, {createContext, useState} from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import {useHistory} from "react-router-dom";

export const UserContext = createContext();

export function UserProvider(props) {

    const cookies = new Cookies();
    const history = useHistory();

    const userMethod = {

        login: (data) => {
            data.preventDefault();
            Axios.post("http://localhost:8762/auth/login", {
                userName: data.target.username.value,
                password: data.target.password.value
            }).then(res => {
                cookies.set('jwt', res.data.token, {path:"/", maxAge: 36000});
                history.push("/")
            }).catch(e => {
                alert("Bad username/password")
            });
        },

        signUp: (data) => {
            data.preventDefault();
            Axios.post("http://localhost:8762/auth/register", {
                userName: data.target.username.value,
                password: data.target.password.value
            }).then(res => {
                console.log(res.data);
                history.push("/")
            }).catch( e =>
                alert("Username is already taken")
            );
        },

        logout: () => {
            cookies.remove("jwt");
            alert("Logged out.")
        },

        ifSinged: () => {
            return (cookies.get("jwt") === undefined);
        }
    };

    return (
        <UserContext.Provider value={{userMethod}}>
            {props.children}
        </UserContext.Provider>
    );
}