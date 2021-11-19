import { useContext, useState } from "react";
import UserContext from "./UserContext";

const Login = () => {
    const [loginData, setLoginData] = useState(() =>({
        username: "",
        password: "",
    }));
    const { setLoggedUser } = useContext(UserContext);
    const handleLogin = (e) => {
        e.preventDefault();
        setLoggedUser({
            userName: loginData.username,
            isLoggedIn: true,
        });
    };
    return (
        <div className='login'>
            <form onSubmit={handleLogin} className="loginForm py-16 ...">
                <h1 className="text-4xl text-white ...">Faça login! =)</h1>
                <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) =>
                        setLoginData((prev) => ({
                            ...prev,
                            username: e.target.value,
                        }))
                    }
                    placeholder="Username"
                />
                <input
                    type="password" 
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => 
                        setLoginData((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                />
                <button type="submit">
                    ENTRAR
                </button>
            </form>
        </div>
    )
}

export default Login;