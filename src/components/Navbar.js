import {Routes, Route, Link} from 'react-router-dom'
import React from 'react'

function Navbar(){


    return(
        
        <nav>
            <ul>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/peliculas">Peliculas</Link> </li>
                <li className='nav-item'><Link to="/personajes">Personajes</Link> </li>
                <li className='nav-item'><Link to="/planetas">Planetas</Link> </li>
            </ul>
        </nav>

      
    )
}

export default Navbar;