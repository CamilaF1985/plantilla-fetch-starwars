import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <div className="dropdown me-3">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos
                        </button>
                        {/* Uso una clase personalizada para correr los items del menú 
                        un poco más hacia la izquierda */}
                        <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item">Item 1
                                {/* Icono de basurero */}
                                <i className="fa-solid fa-trash-can"></i></a></li>
                            <li><a className="dropdown-item">Item 2
                                <i className="fa-solid fa-trash-can"></i></a></li>
                            <li><a className="dropdown-item">Item 3
                                <i className="fa-solid fa-trash-can"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
