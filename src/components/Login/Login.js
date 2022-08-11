import { AuthContext } from "../../context/AuthContext";
import { login } from "../../services/authService";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const { loginHandler } = useContext(AuthContext)
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));
        login(email, password)
            .then(authData => {
                loginHandler(authData);
                navigate('/')
            })
            .catch(() => {

            })
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Login;
