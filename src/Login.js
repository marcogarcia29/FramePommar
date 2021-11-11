const Login = () => {
    return (
        <div className='login'>
            <form className="loginForm">
                <h1>Faça login! =)</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">
                    ENTRAR
                </button>
            </form>
        </div>
    )
}

export default Login;