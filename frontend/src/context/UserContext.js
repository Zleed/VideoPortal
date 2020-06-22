import React, {createContext, useRef, useState} from "react";
import Axios from "axios";
import Cookies from 'universal-cookie';
import {useHistory} from "react-router-dom";
import {cleanCookies} from "universal-cookie/lib/utils";

export const UserContext = createContext();

export function UserProvider(props) {

    const cookies = new Cookies();
    const history = useHistory();
    const letter = useRef();
    const [flag, setFlag] = useState(true);

    const userMethod = {

        login: (data) => {
            data.preventDefault();
            Axios.post("http://localhost:8762/auth/login", {
                userName: data.target.username.value,
                password: data.target.password.value
            }).then(res => {
                cookies.set('jwt', res.data.token, {path:"/", maxAge: 36000});
                cookies.set('userId', res.data.id, {path:"/", maxAge: 36000});
                setFlag(!flag);
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
                history.push("/")
            }).catch( e =>
                alert("Username is already taken")
            );
        },

        logout: () => {
            cookies.remove("jwt");
            cookies.remove("userId");
            setFlag(!flag);
            alert("Logged out.")
        },

        ifSinged: () => {
            return (cookies.get("jwt") === undefined);
            cleanCookies()
        },

        getFirstLetterUserName: (id) => {
            Axios.get(`http://localhost:8762/user/name/${id}`)
                .then( (res) => {
                    letter.current = res.data;
                });
            return letter.current;
        },
        flipFlag: () => {
            setFlag(!flag);
        }
    };

    return (
        <UserContext.Provider value={{flag, userMethod}}>
            {props.children}
        </UserContext.Provider>
    );
}