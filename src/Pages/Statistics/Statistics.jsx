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
      <div>
        <h2 className='text-4xl text-center font-bold mt-20'><span className='text-red-900'>Stat </span>At a Glance</h2>
        <p className='text-center mt-9'>The previous health fair was a highly successful health fair event that took place in a bustling urban community center. This event aimed to promote health and wellness, educate the public on healthy lifestyle choices, and provide access to various health resources. The fair was a highly successful health fair event that took place in a bustling urban community center. This event aimed to promote health and wellness, educate the public on healthy lifestyle choices, and provide access to various health resources.A series of interactive workshops and seminars were conducted throughout the day. Topics ranged from stress management and nutrition to fitness routines and mindfulness practices. Experts from various fields shared their knowledge and engaged with attendees, fostering a learning environment.</p>
          <div data-aos='fade-up' className="mt-10 pt-10 flex justify-center item-center">
            
            <div className="stats stats-vertical lg:stats-horizontal shadow  gap-10 text-center">

                <div className="stat ">
                   <FaMapMarked className='text-3xl ml-5'></FaMapMarked>
                    <div className="stat-title">COUNTRIES</div>
                    <div className='text-xl'>3</div>
                  
                </div>

                <div className="stat">
                    <FaBuilding className='text-3xl ml-5'></FaBuilding>
                    <div className="stat-title">FACILITIES</div>
                    <div  className='text-xl'>42</div>
                    
                </div>

                <div className="stat">
                    <FaUserDoctor className='text-3xl ml-5'></FaUserDoctor>
                    <div className="stat-title">DOCTORS</div>
                    <div  className='text-xl'>1200</div>
                    
                </div>
                <div className="stat">
                    <FaUserNurse className='text-3xl ml-14'></FaUserNurse>
                    <div className="stat-title">ALLIED & NURSING STAFF</div>
                    <div  className='text-xl'>2200</div>
                    
                </div>
                <div className="stat">
                    <FaFileSignature className='text-3xl ml-5'></FaFileSignature>
                    <div className="stat-title">PATIENTS TREATED</div>
                    <div  className='text-xl'>5.5Mn</div>
                    
                </div>

            </div>

        </div>
      </div>
        
    );
};

export default Statistics;