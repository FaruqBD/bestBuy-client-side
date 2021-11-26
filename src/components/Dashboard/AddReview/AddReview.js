import * as React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Rating from '@mui/material/Rating';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [rating, setRating] = React.useState('');
    const { user } = useAuth();
    const onSubmit = data => {
        data.email = user.email;
        data.name = user.displayName;
        data.img = user.reloadUserInfo?.photoUrl;
        data.rating = rating;
        console.log(data)
        axios.post('https://mighty-lowlands-78607.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service vh-100">
            <h2 className="fw-bolder text-uppercase text-center mt-5 mb-4">Give Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("profession", { required: true, maxLength: 20 })} placeholder="Your Profession" />
                <span className="text-danger text-left">{errors.profession?.type === 'required' && "Your Profession is required"}</span>

                <input {...register("text", { required: true })} placeholder="Write Your Review" />
                <span className="text-danger text-left">{errors.text?.type === 'required' && "Your Review is required"}</span>
                <p>Rating</p>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newRating) => {
                        setRating(newRating);
                    }}
                />


                <input className="bg-success btn-lg text-white mt-3" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;