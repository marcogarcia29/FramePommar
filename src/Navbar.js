import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Pomar Framework</h1>
            <div className='links'>
                <form>
                    <input type="text" placeholder="Pesquise por frutas..." />
                    <button type='submit'><i className="fa fa-search"></i> </button>
                </form>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;