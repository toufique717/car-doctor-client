import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../provider/Authprovider';
import Bookingservice from './Bookingservice';

const Bookings = () => {
    const { user } = useContext(Authcontext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [url]);



     const handledelete = id =>
     {
      const proceed = confirm ('are You want to delete');

      if(proceed)
      {
        fetch(`http://localhost:5000/bookings/${id}`,
           {method: 'DELETE'}
        )
        .then(res => res.json())
        .then(data =>
        {
          console.log(data)

          if(data.deletedCount>0)
          {
            alert("deleted Succeessfully");
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);

          }
        }
        )
      }
     }


     const handlebookingconfirm = id =>
     {
         fetch(`http://localhost:5000/bookings/${id}`,
           {method: 'PATCH',
            headers :
            {
                'content-type' : 'application/json'
            },

            body:JSON.stringify({status:'confirm'})
           }
        )
        .then(res => res.json())
         .then(data =>
         {
            console.log(data);
            if(data.modifiedCount >0)
            {
                //updatestate
                const remaining = booking.filter (booking._id !== id);

                updateDoc.status = 'confirm'

                const newbookings = [updateDoc,...remaining];
                setBookings(newbookings)
            }
         }
         )
         
     }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Your Bookings: {bookings.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>CheckBox</th>
                            <th> Image</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th> Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => (
                                <Bookingservice
                                    key={booking._id}
                                    booking={booking}

                                    handlebookingconfirm ={handlebookingconfirm }
                                    handledelete = {handledelete}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
