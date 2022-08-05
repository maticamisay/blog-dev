import { createContext, useEffect, useState } from "react";
import loginServices from "../services/login";
const LoginContext = createContext('');

export function LoginProvider({ defaultValue = [], children }) {
    const [username, setUsername] = useState(defaultValue);
    const [password, setPassword] = useState(defaultValue);
    const [errorMessage, setErrorMessage] = useState(defaultValue);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(false);
    const [token, setToken] = useState(null)

    const handleLogin = async (username, password) => {

        try {
            const user = await loginServices.login({ username, password });
            setUser(user);
            setIsLoggedIn(true);
            window.localStorage.setItem(
                'loggedPostAppUser', JSON.stringify(user)
            )
            setUsername("");
            setPassword("");
        } catch (e) {
            console.log(e);
            setErrorMessage("Wrong credentials");
            setUsername("");
            setPassword("");
            // quitamos el error después de 5 segundos
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    }
    useEffect(() => {
      isLogged()
    }, [])
    const isLogged = () => {
        const loggedUserJSON = window.localStorage.getItem("loggedPostAppUser");
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
            setIsLoggedIn(true);
        }
    }
    
    return (
        <LoginContext.Provider value={{ token, setToken, isLoggedIn, username, setUsername, password, setPassword, handleLogin, errorMessage, user }}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginContext;