 import React from 'react';
import { Link } from 'react-router-dom';

const Servicescard = ({ service }) => {
  const { title, img, price,_id } = service;

  return (
    <div className="h-full flex flex-col">
      <div className="card bg-base-100 w-96 h-full shadow-xl flex flex-col">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt={title}
            className="rounded-xl object-cover w-full h-48"
          />
        </figure>
        <div className="card-body flex flex-col justify-between flex-grow">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-500">Price: ${price}</p>
          <div className="card-actions mt-auto">
             <Link to={`/checkout/${_id}`}>
             <button className="btn btn-primary">Book Now </button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicescard;
