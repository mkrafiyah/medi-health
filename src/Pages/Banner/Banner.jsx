

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="../../../public/banner-3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-red-800">
                        <h1 className="mb-5 text-5xl font-bold text-center">WelCome</h1>
                        <p className="mb-5 text-2xl font-medium">We Care About You and Your Family</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="../../../public/banner-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-gray-600">
                        <h1 className="mb-5 text-5xl font-bold text-center">WelCome</h1>
                        <p className="mb-5 text-2xl font-medium">We Care About You and Your Family</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="../../../public/banner-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-blue-950">
                        <h1 className="mb-5 text-5xl font-bold text-center">WelCome</h1>
                        <p className="mb-5 text-2xl font-medium">We Care About You and Your Family</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="../../../public/banner-4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-teal-700">
                        <h1 className="mb-5 text-5xl font-bold text-center">WelCome</h1>
                        <p className="mb-5 text-2xl font-medium">We Care About You and Your Family</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;