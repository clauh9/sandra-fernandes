import React from 'react';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

const NavBar = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();
    return (
        <nav>
            <h1>Sandra Fernandes</h1>

            <ul className='nav-links'>
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/biscuit">Biscuit</CustomLink>
                <CustomLink href="/croche">Crochê</CustomLink>
            </ul>

            {currentUser === null && <ul className='nav-login'>
                <li><Link to="/login">Login</Link></li>
                <li><button className='sign-up-btn' onClick={() => navigate("./signUp")}>Sign Up</button></li>
            </ul>}

        </nav>
    );
}

function CustomLink({ href, children, ...props }) {
    // const path = window.location.pathname;
    const resolvedPath = useResolvedPath(href);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li>
            <Link className={isActive ? "current" : ""} to={href} {...props}>{children}</Link>
        </li>
    );
}

export default NavBar;
