

const SingleSpecialist = (specialist) => {
    console.log(specialist)
    return (
        <div>
             <div className="card card-compact bg-base-100 shadow-xl w-[300px] h-[350px]">
                <figure><img className="w-full" src={specialist.specialist.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{specialist.specialist.name}</h2>
                    <p>{specialist.specialist.specialists}</p>
                    <p>Phone: {specialist.specialist.phone}</p>
                    <div className="flex">
                        <p>Want to book an appointment?</p>
                        <button className="btn bg-gray-400">Call</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default SingleSpecialist;