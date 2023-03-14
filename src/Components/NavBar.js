import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1>Sandra Fernandes</h1>

            <ul className='nav-links'>
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/biscuit">Biscuit</CustomLink>
                <CustomLink href="/croche">Crochê</CustomLink>
            </ul>

            <ul className='nav-login'>
                <li><Link to="/login">Login</Link></li>
                <li><button className='sign-up-btn'>Sign Up</button></li>
            </ul>

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
