const Login = () => {
    return (
        <div className='login'>
            <form className="loginForm py-16 ...">
                <h1 className="text-4xl text-white ...">Faça login! =)</h1>
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