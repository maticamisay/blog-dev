import { createContext, useState } from "react";
import loginServices from "../services/login";

const LoginContext = createContext('');

export function LoginProvider({ defaultValue = [], children }) {
    const [username, setUsername] = useState(defaultValue);
    const [password, setPassword] = useState(defaultValue);
    const [errorMessage, setErrorMessage] = useState(defaultValue);

    const [user, setUser] = useState(false);

    const handleLogin = async ( username, password) => {
        try {
            const user = await loginServices.login({ username, password });
            setUser(user);
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
    };
    return (
        <LoginContext.Provider value={{ username, setUsername, password, setPassword, handleLogin, errorMessage, user }}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginContext;