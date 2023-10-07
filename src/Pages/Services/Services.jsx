import { Link } from "react-router-dom";


const Services = (services) => {

    

    return (
        <div>
            <div className="card w-[350px] h-[380px] bg-gray-300 shadow-xl">
                <figure>
                    <img src={services.services.image} alt="Shoes" className="rounded" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{services.services.title}</h2>
                    <p>{services.services.description.slice(0,100)}</p>
                    
                    
                    <div className="card-actions flex items-center gap-12">
                    <p className="font-medium">Price: {services.services.price}</p>
                    <Link to={`/services/${services.services.id}`}>
                    <button  className="btn bg-gray-500 font-bold">Details</button>
                    </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;