import React, { useCallback } from "react";
import { app } from "../../firebase/config";
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


const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            // alert(error);
        }
    }, [history]);

    return (
        <div className="login-form">
            <form onSubmit={handleSignUp}>
                <h1>Sign up</h1>
                <div className="content">
                    <div className="input-field">
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" name="password" />
                    </div>
                </div>
                <div className="action">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default withRouter(SignUp);