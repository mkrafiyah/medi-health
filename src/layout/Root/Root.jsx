import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Header from "../../Pages/Header/Header";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;