import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import { useLocation } from "react-router";

const Navbar = () => {
    const {carrinho, loggedUser} = useContext(UserContext);
    const { pathname } = useLocation();

    return (
        <nav className='navbar w-screen ...'>
            <Link to='/'>
                <h1 className="text-gray md:text-9x1 ...">Pomar Framework</h1>
            </Link>
            {pathname !== '/login' && (
                <div className='links items-center flex flex-row ...'>
                    <form className="flex items-stretch mr-8 ...">
                        <input
                            className="text-sm ..."
                            type="text"
                            placeholder="Pesquise por frutas..."
                        />
                        <button type="submit">
                            <i className="fa fa-search"></i>{" "}
                        </button>
                    </form>
                    {loggedUser.isLoggedIn ? (
                        <>
                        <span>Bem vindo(a), {loggedUser.userName}</span>
                        <span>Carrinho: {carrinho.length}</span>
                        </>
                    ) : (
                        <Link to='/login'>Login</Link>
                    )}
                </div>
            )}
            {/*<span>Carrinho: {carrinho.length}</span>*/}
        </nav>
    );
};

export default Navbar;