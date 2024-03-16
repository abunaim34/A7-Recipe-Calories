const Banner = () => {
    return (
        <div className="hero my-12 rounded-[36px]" style={{backgroundImage: 'url(https://i.ibb.co/HCCVbRL/BannerR.png)'}}>
            <div className=" bg-[https://i.ibb.co/02RcFYx/Rectangle-1.png]"></div>
                <div className="hero-content text-center text-white my-32">
                    <div className="lg:mx-auto lg:max-w-[800px]">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='space-x-8'>
                      <button className='btn btn-success rounded-3xl'>Explore Now</button>
                      <button className='btn btn-outline  btn-secondary border-white rounded-3xl font-bold'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;