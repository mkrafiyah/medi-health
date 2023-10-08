import { Link, NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import {  useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";





const Navbar = () => {
    const { user, logOut, auth} = useContext(AuthContext);
    const [userLoggedOut, setUserLoggedOut] = useState('');

    const handleSignOut = () =>{
        logOut()
        .then(result=>{
            console.log(result.user)
            setUserLoggedOut('logged Out')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    
    useEffect(() => {
        Aos.init();
    }, [])

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/specialists'>Speakers</NavLink></li>
        <li><NavLink to='/hospitals'>Our Hospitals</NavLink></li>
       
    </>
    return (
        <div>
            <div data-aos='fade-down' className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex gap-0 justify-center items-center">
                        <img className="w-20" src="../../../public/stethoscope.jpg" alt="" />
                        <a className="btn btn-ghost normal-case text-2xl">
                            <p>Medi<span className="text-red-700">Health</span></p>
                        </a>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div>
            {
                    user ? <div>
                        
                        <button onClick={handleSignOut} className="btn">SignOut</button> 
                    </div>
                        :
                        <Link to='/login'>
                            <div className="navbar-end">
                                <button className="py-3 px-5 rounded-md bg-red-800 text-white">Login</button>
                            </div>
                        </Link>
                }
                
            </div>

               

            </div>
           
        </div>
    );
};

export default Navbar;