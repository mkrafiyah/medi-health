import { useEffect, useState } from "react";
import Hospital from "../Hospital/Hospital";
import Navbar from "../Navbar/Navbar";


const Hospitals = () => {
    const [ourHospitals, setOurHospitals] = useState([]);

    useEffect(()=>{
        fetch('./hospitals.json')
        .then(res => res.json())
        .then(data => setOurHospitals(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
            {
                ourHospitals.map(hospital => <Hospital key={hospital.id} hospital={hospital}></Hospital>)
            }
            </div>
        </div>
    );
};

export default Hospitals;