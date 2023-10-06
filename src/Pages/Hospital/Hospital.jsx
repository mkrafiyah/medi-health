import {FaLocationDot, FaPhoneVolume, FaHouseMedical } from "react-icons/fa6";

const Hospital = (hospital) => {
 
    return (
        <div className="my-20">
            
            
                <div className="card card-side w-[1100px] h-[250px] bg-red-100 shadow-xl my-6">
                <figure className="w-1/2"><img className="  w-full" src={hospital.hospital.image} alt="Movie" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{hospital.hospital.hospital_name}</h2>
                    <p className="flex gap-2 items-center"><span><FaLocationDot></FaLocationDot></span>{hospital.hospital.address}</p>
                    <p  className="flex items-center gap-2"> <span><FaHouseMedical></FaHouseMedical></span> {hospital.hospital.speciality}</p>
                    <p className="flex items-center gap-2"> <span><FaPhoneVolume></FaPhoneVolume></span> {hospital.hospital.phone_number}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Hospital;