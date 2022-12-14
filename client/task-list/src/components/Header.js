import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul className={classes.container}>
            <li className={classes.logo}>
                <h2>task-list</h2>
            </li>
            <li>
                <a>
                    <Link to="/">
                        {' '}
                        <h2>Home</h2>
                    </Link>
                </a>
            </li>

            <li>
                <a>
                    <Link to="/tasks">
                        <h2>Tasks</h2>
                    </Link>
                </a>
            </li>
        </ul>
    );
};

export default Header;
