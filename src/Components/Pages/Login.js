import React, { useCallback } from "react";
import { Navigate } from "react-router";
import { app } from "../../firebase/config.js";
import { useAuthContext } from "../AuthContext.js";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}



const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                // alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useAuthContext();

    if (currentUser) {
        return <Navigate to="/" />;
    }


    return (
        <div className="login-form">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="content">
                    <div className="input-field">
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" name="password" />
                    </div>
                </div>
                <div className="action">
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(Login);
