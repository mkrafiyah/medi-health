import { useLoaderData, useParams } from "react-router-dom";
import Fair from "../Fair/Fair";


const Service = () => {
    const { id } = useParams();
    const serviceDetails = useLoaderData();
    const idInt = parseInt(id);
    const details = serviceDetails.find(detail => detail.id === idInt);
    console.log(details, id)

    return (
        <div className="mt-20">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-full" src={details.image}alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details.title}</h2>
                    <p>{details.description}</p>
                     <p>Price: {details.price}</p>
                </div>
            </div>
            <Fair></Fair>
        </div>
    );
};

export default Service;