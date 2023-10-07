import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Statistics from "../Statistics/Statistics";
import Fair from "../Fair/Fair";


const Home = () => {
    const data = useLoaderData();
    console.log(data )
    return (
        <div>
            
            <Banner></Banner>
            <h2 className="text-3xl text-center mt-10 font-bold">Our <span className="text-red-900">Services</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
            
            {
              data.map(services => <Services key={services.id} services={services}></Services>)
            }
          </div>
          <Statistics></Statistics>
          <Fair></Fair>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;