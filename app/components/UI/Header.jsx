import React from "react";
import 'sass/modules/header.scss';

// stateless component without props

const Header = () => (
    <div className="flex flex-center p2 border-bottom bg-darken-3 header">
        <h1 className="h2 m1 flex-auto">
            React / Redux starter project
        </h1>
    </div>
);

export default Header;
