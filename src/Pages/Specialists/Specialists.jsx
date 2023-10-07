import { useLoaderData } from "react-router-dom";
import SingleSpecialist from "../SingleSpecialist/SingleSpecialist";


const Specialists = () => {
    const data = useLoaderData();
    
    return (
        <div className="flex flex-wrap pl-10 gap-5 mt-20 pl-20">
            {
                data.map(specialist => <SingleSpecialist key={specialist.id} specialist={specialist}></SingleSpecialist>)
            }
           
        </div>
    );
};

export default Specialists;