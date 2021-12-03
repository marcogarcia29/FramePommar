import { Link } from "react-router-dom";
import React, {useContext, useState } from "react";
import UserContext from "./UserContext";
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router";

const Navbar = () => {
    const {carrinho, loggedUser} = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search)

    const searchString = query.get('search');

    console.log(searchString);

    const [search, setSearch] = useState('')

    const handleSearch = (event) =>{
        event.preventDefault()
        if (!search) return
        navigate(`/?search=${search}`,)
    }

    return (
        <nav className='navbar w-screen ...'>
            <Link to='/'>
                <h1 className="text-gray md:text-9x1 ...">Pomar Framework</h1>
            </Link>
            {location.pathname !== '/login' && (
                <div className='links items-center flex flex-row ...'>
                    <form onSubmit={handleSearch} className="flex items-stretch mr-8 ...">
                        <input
                            className="text-sm ..."
                            type="text"
                            placeholder="Pesquise por frutas..."
                            onChange={(e)=>setSearch(e.target.value)}
                            value={search}
                        />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                    {loggedUser.isLoggedIn ? (
                        <>
                        {carrinho.length !== 0 && ( <Link to='/CartView'> <img  className="cartUser" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/344/external-cart-essentials-icongeek26-flat-icongeek26.png"></img> </Link>)}
                        <span>Bem vindo(a), {loggedUser.userName}</span>
                        </>
                    ) : (
                        <Link to='/login'>Login</Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;