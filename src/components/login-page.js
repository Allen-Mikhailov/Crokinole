function LoginPage(props)
{
    function LoginFunc()
    {
        console.log("Login")
    }

    return (
        <div>
            <div className="title">Crokinole Login</div>
            <div className="login-container">
                <div className="input-label">Username</div>
                <input className="input" id="UsernameInput"/>

                <div className="login-spacer"/>

                <div className="input-label">Password</div>
                <input className="input" id="PasswordInput"/>

                <div className="login-spacer"/>

                <button className="login-button" onClick={LoginFunc}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage