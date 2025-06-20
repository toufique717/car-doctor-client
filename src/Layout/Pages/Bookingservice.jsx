import React from 'react';

const Bookingservice = ({ booking,handledelete,handlebookingconfirm  }) => {
    const { status,customername, service, date, price,img,_id } = booking;

     
    return (                                                                               
       <tr>
            <td><button onClick={()=>handledelete(_id )}> <label>
            <input type="checkbox" className="checkbox" />
          </label></button></td>


 
             
              <td className="max-w-2 max-h-2">
  {img ? (
    <img src={img} alt="Description" className="w-16 h-16 object-cover" />
  ) : (
    <span className="text-gray-400 italic">No Image</span>
  )}
</td>
            

            <td>{customername}</td>
            <td>{service}</td>
            <td>{date}</td>
            <td>{price}</td>
            <td>{ status === 'confirm' ? <span className='text-red-700'> Confirmed</span> :
            <button onClick={()=>handlebookingconfirm (_id)}>please Confirm</button>}</td>
        </tr>
    );
};

export default Bookingservice;
