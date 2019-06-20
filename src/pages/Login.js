import React from 'react';
const Login = () => {
    return (
        <div>
            <label htmlFor="">Podaj Login: <input type="text" /></label>
            <label htmlFor="">Podaj Hasło: <input type="password" /></label>
            <button>Zaloguj</button>
        </div>
    );
}

export default Login;