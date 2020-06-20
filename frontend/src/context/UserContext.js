import React, {createContext} from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import {useHistory} from "react-router-dom";

export const UserContext = createContext();

export function UserProvider(props) {

    const cookies = new Cookies();
    const history = useHistory();
    let ifSinged = false;

    console.log(ifSinged);

    const userMethod = {

        login: (data) => {
            data.preventDefault();
            Axios.post("http://localhost:8762/auth/login", {
                userName: data.target.username.value,
                password: data.target.password.value
            }).then(res => {
                cookies.set('jwt', res.data.token, {path:"/", maxAge: 36000});
                ifSinged = true;
                history.push("/")
            }).catch(e => {
                alert(e);
            });
        },

        signUp: (data) => {
            data.preventDefault();
            Axios.post("http://localhost:8762/auth/register", {
                userName: data.target.username.value,
                password: data.target.password.value
            }).then(res => {
                console.log(res.data);
            });
            history.push("/")
        },

        logout: () => {
            cookies.remove("jwt");
            ifSinged = false;
            alert("Logged out.")
        },

        ifSinged: () => {
            return !ifSinged;
        }
    };
//TODO -cookies from value
    return (
        <UserContext.Provider value={{userMethod}}>
            {props.children}
        </UserContext.Provider>
    );
}