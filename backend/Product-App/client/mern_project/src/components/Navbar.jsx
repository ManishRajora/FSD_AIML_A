import React from "react";
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>View products</li>
                <li>Add product</li>
                <li>Logout</li>
            </ul>
        </div>
    )
}

export default Navbar;