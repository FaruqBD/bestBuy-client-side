import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [myReviews, setMyReviews] = useState([])
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://mighty-lowlands-78607.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [myReviews, user.email])
    return (
        <div id="experts" className="container">
            <div Name="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head my-5">
                    <h2>Customer Reviews</h2>
                </div>
            </div>
            <div className="row">
                {
                    myReviews.map(review => <Review
                        key={review.id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;