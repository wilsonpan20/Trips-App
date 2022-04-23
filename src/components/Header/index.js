import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg'
import './style.css'

export default function Header(){
    return(
        <header className="container">
         <Link  to="/">
         <img className="logo" src={Logo} alt="Logo Projeto" />
         </Link>
         <Link  className="reserva" to="/reservas">
             <div>
                 <strong>Minhas reservas</strong>
                 <span>3 reserva</span>
             </div>
         </Link>
        </header>
    )
}