import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Fair = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
            <h2 className="text-4xl font-bold mt-20 text-center mb-10"><span className="text-red-900">Health Fair</span> 2023</h2>
            <div className="grid gap-5 pl-5 md:pl-20 lg:pl-0 lg:flex  lg:justify-around ">
                <div >
                    <div data-aos='fade-up' className="card w-96 bg-gray-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Venue and Date</h2>
                            <p>Venue: City Center,Dhaka</p>
                            <p>Date: 29 October,2023</p>
                            <p>Time: 10am-10pm </p>
                            
                        </div>
                    </div>
                </div>
                <div >
                    <div data-aos='fade-down' className="card w-96 bg-gray-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Activities</h2>
                            <p>Seminar</p>
                            <p>Marathon</p>
                            <p>Buy products</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fair;