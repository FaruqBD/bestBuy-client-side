import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const {user} = useAuth();
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`https://stormy-garden-76838.herokuapp.com/all-bookings`)
            .then(res => res.json())
            .then(data => {
               const myBooking = data.filter(booking => booking.uid === user.uid);
               setBookings(myBooking);
            });
    }, [bookings, user.uid])

    const handleDelete = id => {
        const url = `https://stormy-garden-76838.herokuapp.com/booking-delete/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Booking Deleted Successfully')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
    }
    return (
        <div className="container my-5">
            <h1 className="text-center py-5" >My Booking</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Travel By</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Booking Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking =>
                            <tr>
                                <th scope="row">{bookings.indexOf(booking) + 1}</th>
                                <td>{booking.serviceName} (adult-{booking.adult}, children-{booking.children})</td>
                                <td>${booking.price}</td>
                                <td>{booking.ticketType}</td>
                                <td>{booking?.date}</td>
                                {booking.status === 'Approved' && <td><button className="btn btn-success">Approved</button></td>}
                                {booking.status === 'Pending' && <td><button className="btn btn-warning">Pending</button></td>}
                                {booking.status === 'Pending' && <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this Booking?')) handleDelete(booking._id) } }>Delete</button></td>}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;