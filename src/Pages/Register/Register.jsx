import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [successRegistration, setSuccessRegistration] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(email, password, photo,name)

        setSuccessRegistration('');
        setRegistrationError('');

        //validation

        if(password.length < 6){
            setRegistrationError('error')
            return;
        }else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)){
            setRegistrationError('error')
            return;
        }

        //create user

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            setSuccessRegistration('successful')
        })
        .catch(err =>{
            console.error(err)
        })
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-10">Register Here</h2>
            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-slate-400 mt-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                </div>
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
                    
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <Link to='/login'>
                <p className="mt-5">Already have an account? Go to<span className="font-bold text-blue-500">Login</span></p>
                </Link>
            </form>
            {
              successRegistration && <p>{toast("Registration Successful")}</p>  
            }
            {
                registrationError && <p>{toast("Registration Failed")}</p>
            }
            <ToastContainer />
        </div>
    );
};

export default Register;