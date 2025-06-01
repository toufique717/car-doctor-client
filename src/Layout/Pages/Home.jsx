import React from 'react';
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'

const Home = () => {
    return (
        <div>
            <h1> This is home </h1>

            {/* carosol div */}

            <div>
                 <div className="carousel w-full">
  <div id="slide1" className="   carousel-item relative w-full">
    <img
      src={image4}
      className="w-full" />
    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">


      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="ml-4 bg-orange-600 btn btn-circle">❯</a>
    </div>

 
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
       src={image1}
      className="w-full" />
    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className=" ml-4 bg-orange-600 btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
       src={image2}
      className="w-full" />
    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className=" ml-4 bg-orange-600 btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
       src={image3}
      className="w-full" />
    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="  ml-4 bg-orange-600 btn btn-circle">❯</a>
    </div>
  </div>
</div>
 
            </div>
        </div>
    );
};

export default Home;