import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-red-100 w-[700px] h-[400px] mx-auto mt-10 rounded-lg">
            <h2 className="text-6xl text-center pt-10">Error Page!!!!!!!</h2>
            <p className="text-3xl mt-16 text-center">Want to Go Back Home??Click Below</p>
             <Link to='/'>
             <p className="text-3xl mt-16 text-center underline text-red-900">Home</p>
             </Link>
        </div>
    );
};

export default ErrorPage;