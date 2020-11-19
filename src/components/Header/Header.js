import React from "react";
import classes from './Header.module.css';
import Description from "../Description/Description";
import Logo from "../Logo/Logo";
import CreatedBy from "../CreatedBy/CreatedBy";

const Header = () => (
    <div className={classes.Header}>
        <Logo/>
        <Description/>
        <CreatedBy/>
    </div>
);

export default Header;