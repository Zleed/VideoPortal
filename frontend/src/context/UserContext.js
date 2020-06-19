import React, {createContext} from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';

export const UserContext = createContext();

export function UserProvider(props) {

    const cookies = new Cookies();

    const userMethod = {

        login: (data) => {
            data.preventDefault();
            Axios.post("http://localhost:8762/auth/login", {
                userName: data.target.username.value,
                password: data.target.password.value
            }).then(res => {
                cookies.set('jwt', res.data.token, {path:"/"});
                console.log(cookies.get("jwt"));
            })
        },

        signUp: (data) => {
            data.preventDefault();
            Axios.post("http://localhost:8762/auth/register", {
                userName: data.target.username.value,
                password: data.target.password.value
            }).then(res => {
                console.log(res.data);
            })
        },

        logout: () => {
            cookies.remove("jwt");
            alert("Logged out.")
        }
    };

    return (
        <UserContext.Provider value={{cookies, userMethod}}>
            {props.children}
        </UserContext.Provider>
    );
}