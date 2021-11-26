import React from 'react';
import StarRating from '../../StarRating/StarRating';

const Review = ({review}) => {
    const { name, img, rating, profession, text} = review;
    return (
        <div className="col-lg-3 col-sm-6 col-12 mb-5">
            <div className="team-member mx-1 rounded text-center shadow p-3 bg-white rounded">
                <img className="img-fluid rounded-circle m-3" width="200" src={img?img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqqq3hB65nUNOn79Pa676ooImAqXWBb93jA&usqp=CAU'} alt="{name}" />
                <h3 className="text-center">{name}</h3>
                <h5 className="text-center text-warning">{profession}</h5>
                <StarRating value={rating}/>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Review;