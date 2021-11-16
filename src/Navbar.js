import { Link } from "react-router-dom";
import React, { useState} from "react";

const Navbar = () => {
    const [local, setLocal] = useState('');
    
    return (
        <nav className='navbar  md:w-auto ...'>
            <Link onClick={() => setLocal('http://localhost:3000/')} to='/'><h1 className="text-gray md:text-9x1 ...">Pomar Framework</h1></Link>
            {local === 'http://localhost:3000/login'
    
                ?  
                null
                : <div className='links items-center flex flex-row ...'>
                    <form className="flex items-stretch mr-8 ...">
                        <input className="text-sm ..." type="text" placeholder="Pesquise por frutas..." />
                        <button type="submit"><i className="fa fa-search"></i> </button>
                    </form>
                    <Link onClick={() => setLocal('http://localhost:3000/login')} to='/login'>Login</Link>

                </div>
            }
            

        </nav>
    )
}

export default Navbar;