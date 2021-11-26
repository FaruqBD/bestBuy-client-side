import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyReview = () => {

    const [myReviews, setMyReviews] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://mighty-lowlands-78607.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => {
                const myReviews = data.filter(myReview => myReview.email === user.email);
                setMyReviews(myReviews);
            });
    }, [myReviews, user.email])

    const handleDelete = id => {
        const url = `https://mighty-lowlands-78607.herokuapp.com/review/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Review deleted successfully')
                    const remaining = myReviews.filter(review => review._id !== id);
                    setMyReviews(remaining)
                }
            })
    }
    return (
        <div className="container">
            <h1 className="text-center pb-5" >Your Reviews</h1>
            <Link className="px-3" to={`/dashboard/add-review`}>
                <button className="btn btn-success">Add New Review</button>
            </Link>
            <table className="table">
            
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Review</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myReviews.map(review =>
                            <tr>
                                <th scope="row">{myReviews.indexOf(review) + 1}</th>
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

export default MyReview;