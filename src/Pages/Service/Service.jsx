import { useLoaderData, useParams } from "react-router-dom";
import Fair from "../Fair/Fair";
import Footer from "../Footer/Footer";


const Service = () => {
    const { id } = useParams();
    const serviceDetails = useLoaderData();
    const idInt = parseInt(id);
    const details = serviceDetails.find(detail => detail.id === idInt);
    console.log(details, id)

    return (
        <div className="mt-20">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-1/2"><img className="w-full" src={details.image}alt="Movie" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{details.title}</h2>
                    <p>{details.description}</p>
                     <p className="font-bold">Price: {details.price}</p>
                     <button className="btn bg-red-100">Buy Now</button>
                </div>
            </div>
            <Fair></Fair>
            <Footer></Footer>
        </div>
    );
};

export default Service;