import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [successLogin, setSuccessLogin] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password)

        setSuccessLogin('');
        setErrorLogin('');

        signIn(email, password)
        .then(result =>{
            console.log(result.user)
            setSuccessLogin('successful')
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
            setErrorLogin(error.message);
        })


    }
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-10">Login Here</h2>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-slate-400 mt-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <Link to='/register'>
                <p>Do not have an account? Go to<span className="font-bold text-blue-500">Register</span></p>
                </Link>
            </form>
            {
               successLogin &&  <p>{toast("Login Successful")}</p>
                
            }
            {
                errorLogin &&  <p>{errorLogin}</p>
            }
            <ToastContainer />
        </div>
    );
};

export default Login;