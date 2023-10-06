import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const About = () => {
    return (
        <div><Navbar></Navbar>
            <div className="w-full h-96 border bg-red-100 mt-20 flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 mx-20 ">
                <div className="border-r-2 border-red-900"><h3 className="text-2xl">About Us</h3>
                    <p>MediHealth Healthcare is the largest private healthcare company in the Bangladesh and ranks amongst the leading fertility service providers in the world. Your health is our first concern.</p>
                </div>
                <div className="ml-10">
                    <ul>
                        <li>Who we are</li>
                        <li>History</li>
                        <li>Purpose and Vision</li>
                        <li>Awards and Recognition</li>
                        <li>Members of the Board</li>
                        <li>Senior Management</li>
                    </ul>
                </div>
                
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default About;