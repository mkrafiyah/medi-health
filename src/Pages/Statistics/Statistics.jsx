import { FaMapMarked, FaBuilding, FaFileSignature} from 'react-icons/fa';
import {FaUserDoctor, FaUserNurse} from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Statistics = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div data-aos='fade-up' className="mt-10 pt-10 flex justify-center item-center">
            
                <div className="stats stats-vertical lg:stats-horizontal shadow bg-gray-300 gap-10 text-center">

                    <div className="stat ">
                       <FaMapMarked className='text-5xl ml-5'></FaMapMarked>
                        <div className="stat-title">COUNTRIES</div>
                        <div className="stat-value">3</div>
                      
                    </div>

                    <div className="stat">
                        <FaBuilding className='text-5xl ml-5'></FaBuilding>
                        <div className="stat-title">FACILITIES</div>
                        <div className="stat-value">42</div>
                        
                    </div>

                    <div className="stat">
                        <FaUserDoctor className='text-5xl ml-5'></FaUserDoctor>
                        <div className="stat-title">DOCTORS</div>
                        <div className="stat-value">1200</div>
                        
                    </div>
                    <div className="stat">
                        <FaUserNurse className='text-5xl ml-14'></FaUserNurse>
                        <div className="stat-title">ALLIED & NURSING STAFF</div>
                        <div className="stat-value">2200</div>
                        
                    </div>
                    <div className="stat">
                        <FaFileSignature className='text-5xl ml-5'></FaFileSignature>
                        <div className="stat-title">PATIENTS TREATED</div>
                        <div className="stat-value">5.5Mn</div>
                        
                    </div>

                </div>

            </div>
        
    );
};

export default Statistics;