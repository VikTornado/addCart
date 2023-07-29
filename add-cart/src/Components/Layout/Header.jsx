import React, {Fragment} from 'react';
import logo from "../../Assets/4.png"
import classes from "../Layout/Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>MealsLogo</h2>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={logo} alt="logo"/>
            </div>
        </Fragment>
    );
};

export default Header;