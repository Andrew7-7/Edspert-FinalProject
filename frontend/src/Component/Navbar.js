import React from "react"
import '../App.css'
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <div className="navbarContainer">
            <Link to='/' className="logo">LOGO</Link>
            <div className="rightNav">
                <p className="programNav">Program v
                    <ul className="dropDown">
                        <li>Python</li>
                        <li>C</li>
                        <li>Java</li>
                    </ul>
                </p>
                <p>Bidang ilmu</p>
                <p>Tentang edspert</p>
                <Link to={"/login"} className="masuk">Masuk/Daftar</Link>
            </div>
        </div>
    )
}

export default Navbar;