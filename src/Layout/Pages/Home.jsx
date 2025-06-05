 import React, { useEffect, useState } from 'react';
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import person from '../../assets/person.jpg'
import parts from  '../../assets/parts.jpg'
import Servicescard from './servicescard';

const Home = () => {

    const [services,setservices] = useState([])

    useEffect(()=>
        {
            fetch('services.json')
            .then(res=>res.json())
            .then (data=>setservices(data))
        },[])
    return (
        <div>
            <h1>This is home</h1>

            {/* Carousel wrapper */}
            <div>
                <div className="carousel rounded rounded-xl w-full h-[400px]">

                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={image4} className="w-full" />
                        <div className="absolute inset-0 bg-gradient-to-l from-white/40 via-white/10 to-black/100"></div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-start">
                            <div className='py-4'>
                                <p className='text-4xl font-bold py-4'>I am a Big big Car doctor ha ha ha</p>
                                <p className='text-xl'>
                                    Do you want to repair your car? it is very easy. <br />
                                    Come and see our service. You will be satisfied. I am sure.
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex space-x-4 -translate-y-1/2 transform justify-start">
                            <a href="#slide4" className="btn btn-active btn-primary">Discover More</a>
                            <a href="#slide2" className="btn btn-outline btn-secondary">latest Project</a>
                        </div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="ml-4 bg-orange-600 btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={image3} className="w-full" />
                        <div className="absolute inset-0 bg-gradient-to-l from-white/60 via-white/10 to-black/80"></div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-start">
                            <div className='py-4'>
                                <p className='text-4xl font-bold py-4'>I am a Big big Car doctor ha ha ha</p>
                                <p className='text-xl'>
                                    Do you want to repair your car? it is very easy. <br />
                                    Come and see our service. You will be satisfied. I am sure.
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex space-x-4 -translate-y-1/2 transform justify-start">
                            <a href="#slide4" className="btn btn-active btn-primary">Discover More</a>
                            <a href="#slide2" className="btn btn-outline btn-secondary">latest Project</a>
                        </div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="ml-4 bg-orange-600 btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={image2} className="w-full" />
                        <div className="absolute inset-0 bg-gradient-to-l from-white/60 via-white/10 to-black/80"></div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-start">
                            <div className='py-4'>
                                <p className='text-4xl font-bold py-4'>I am a Big big Car doctor ha ha ha</p>
                                <p className='text-xl'>
                                    Do you want to repair your car? it is very easy. <br />
                                    Come and see our service. You will be satisfied. I am sure.
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex space-x-4 -translate-y-1/2 transform justify-start">
                            <a href="#slide4" className="btn btn-active btn-primary">Discover More</a>
                            <a href="#slide2" className="btn btn-outline btn-secondary">latest Project</a>
                        </div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="ml-4 bg-orange-600 btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={image1} className="w-full" />
                        <div className="absolute inset-0 bg-gradient-to-l from-white/60 via-white/10 to-black/80"></div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-start">
                            <div className='py-4'>
                                <p className='text-4xl font-bold py-4'>I am a Big big Car doctor ha ha ha</p>
                                <p className='text-xl'>
                                    Do you want to repair your car? it is very easy. <br />
                                    Come and see our service. You will be satisfied. I am sure.
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-5 right-5 bottom-0 z-20 flex -translate-y-1/2 transform justify-end">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="ml-4 bg-orange-600 btn btn-circle">❯</a>
                        </div>
                    </div>

                </div> {/* Close carousel */}
            </div> {/* Close wrapper */}



<div>
    {/* About div  */}


    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
     <div className='w-1/2 relative'>
        <img
      src={person}
      className=" w-3/4 rounded-lg shadow-2xl" />

      <img
      src={parts}
      className=" absolute right-5 top-36   border-8 border-white-800  w-1/2 rounded-lg shadow-2xl" />
     </div>
    <div  className='w-1/2'>
    <p className='text-xl font-bold text-orange-500'>About us</p>
      <h1 className="text-5xl font-bold"> We Are qylified & Of Experient in This Field</h1>
      <p className="py-6">
       
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary bg-orange-500 border-orange-500"> Get More Info</button>
    </div>
  </div>
</div>
</div>

<div className='py-8 flex flex-col items-center space-y-2'>
    {/* Our service section */}

    <p className='text-xl font-bold text-orange-600 '>Our Services</p>
    <p className='text-3xl font-bold '>Our Services Area </p>
    <p className=''> At  we are committed to delivering high-quality solutions that cater to y   in achieving their goals through  </p>

    <p> personalized attention and expert execution</p>

    <div className='grid grid-cols-3 gap-4 '>
        
    {
        services.map(service=><Servicescard
        
        key={service._id}
        service={service}>

        </Servicescard>)
    }
    </div>

</div>





        </div> // Close outer container
    );
};

export default Home;
