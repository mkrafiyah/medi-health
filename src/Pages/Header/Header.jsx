import { useContext, useState} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const Header = () => {
    const {user, auth} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [loggedUser, setLoggedUser] = useState('')
    
    //google signin
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            setLoggedUser(user)
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    const googleSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            setLoggedUser(null)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    
    return (
        <div className="pb-5">
            <div className="bg-red-100 text-center">
            {
                user ? <span>Email: {user.email}
                {user.displayName}
                {user.photoURL}
                </span> : ''
            }
            </div>
            <div className="bg-red-100 p-3 w-full flex justify-between items-center">
                <h4 className="text-lg">Want to Signin With Google??</h4>
                <div>
                {
                    loggedUser ? 
                    <div>
                <button className="py-3 px-5 rounded-md bg-red-900 text-white" onClick={googleSignOut}>Sign Out</button>
            </div> :
            <button onClick={handleGoogleSignIn} className="py-3 px-5 rounded-md bg-white text-red-900 font-bold">Google Sign in</button>

                }
            
                
                {
                    loggedUser && <div>
                        <div className="flex gap-3">
                        <h2 className="text-lg">User: {loggedUser.displayName}</h2>
                        <p className="text-lg">Email: {loggedUser.email}</p>
                        </div>
                        <img src={loggedUser.photoURL} alt="" />
                        </div>  
                        
                }
                </div>
 
            </div>
            
            
                
            
           
        </div>
    );
};

export default Header;
