import React from "react";

import "../../styles/components/Header.css";

const Header = (props) => {
    return (
        <div className="holder">
            <img src="img/logo.png" width={100} alt="Transportes X"></img>
            <h1>Transportes X</h1>
        </div>
    );
}

export default Header;