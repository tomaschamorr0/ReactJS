import React from 'react';
import CartWidget from './CartWidget';

const NavBar =() =>{
    return(
        <div className="navbar bg-base-100 bg-error">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl">TheUmbrellaAcademy</a>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Comics</a></li>
                    <li tabIndex={0}>
                        <a>
                            Mangas
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a>Shonen</a></li>
                            <li><a>Shojo</a></li>
                            <li><a>Seinen</a></li>
                            <li><a>Josei</a></li>
                        </ul>
                    </li>
                    <li><a>Libros</a></li>
                    <li><a>Merchandising</a></li>
                    
                    <li><CartWidget/></li>
                </ul>
                <div className="form-control">
                <div className="input-group ">
                    <input type="text" placeholder="Buscar…" className="input input-bordered"/>
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NavBar;