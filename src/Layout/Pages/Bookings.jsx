 import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../provider/Authprovider';
import Bookingservice from './Bookingservice';
import axios from 'axios';

const Bookings = () => {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:5000/bookings?email=${user.email}`;
      axios.get(url, { withCredentials: true })
        .then(res => {
          setBookings(res.data);
        })
        .catch(err => {
          console.error('Error fetching bookings:', err);
        });
    }
  }, [user?.email]);

  const handledelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      axios.delete(`http://localhost:5000/bookings/${id}`, { withCredentials: true })
        .then(res => {
          if (res.data.deletedCount > 0) {
            alert('Deleted successfully');
            setBookings(bookings.filter(booking => booking._id !== id));
          }
        });
    }
  };

  const handlebookingconfirm = (id) => {
    axios.patch(`http://localhost:5000/bookings/${id}`, { status: 'confirm' }, { withCredentials: true })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          const updatedBookings = bookings.map(booking =>
            booking._id === id ? { ...booking, status: 'confirm' } : booking
          );
          setBookings(updatedBookings);
        }
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Bookings: {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>CheckBox</th>
              <th>Image</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <Bookingservice
                key={booking._id}
                booking={booking}
                handlebookingconfirm={handlebookingconfirm}
                handledelete={handledelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
