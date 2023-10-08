import { useLoaderData } from "react-router-dom";
import SingleSpecialist from "../SingleSpecialist/SingleSpecialist";


const Specialists = () => {
    const data = useLoaderData();
    
    return (
        <div className="flex flex-wrap gap-5 mt-20 pl-20">
           <h2 className="text-4xl font-bold text-center md:mx-auto"> Our <span className="text-red-900">Speakers</span></h2>
           <div className="flex flex-wrap  gap-5 mt-20 lg:pl-20">
           {
                data.map(specialist => <SingleSpecialist key={specialist.id} specialist={specialist}></SingleSpecialist>)
            }
           
           </div>
        </div>
    );
};

export default Specialists;