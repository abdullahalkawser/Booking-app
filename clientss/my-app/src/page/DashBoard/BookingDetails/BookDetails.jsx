import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/Provider';


const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:3000/bookings?email=${user.email}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch bookings');
                    }
                    return res.json();
                })
                .then((data) => {
                    setBookings(data);
                })
                .catch((error) => {
                    console.error('Error fetching bookings:', error);
                });
        }
    }, [user]);

    return (
        <div>
            <h2>Book Details {bookings.length}</h2>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Car Name</th>
                        <th>Country</th>
             
                        <th>Date</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                             <tr>
       
                             <td>{booking.car}</td>
                             <td>{booking.contry}</td>
                  
                             <td>
                                startDate:{booking.startDate}, <br />endDate:{booking.endDate}</td>
                                <td>${booking.totalPrice}</td>
                     
                           </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookDetails;
