import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AllReview = () => {

    const [allReviews, setAllReviews] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://mighty-lowlands-78607.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setAllReviews(data));
    }, [allReviews, user.email])

    const handleDelete = id => {
        const url = `https://mighty-lowlands-78607.herokuapp.com/review/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Review deleted successfully')
                    const remaining = allReviews.filter(review => review._id !== id);
                    setAllReviews(remaining)
                }
            })
    }
    return (
        <div className="container">
            <h1 className="text-center pb-5" >Your Reviews</h1>
            <table className="table">
            
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Review</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allReviews.map(review =>
                            <tr>
                                <th scope="row">{allReviews.indexOf(review) + 1}</th>
                                <td>{review.name}</td>
                                <td>{review.email}</td>
                                <td>{review.profession}</td>
                                <td>{review.text}</td>
                                <td>{review.rating}</td>
                                <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this product?')) handleDelete(review._id) }}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllReview;