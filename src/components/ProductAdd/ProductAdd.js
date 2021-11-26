import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './ProductAdd.css';

const ProductAdd = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = true
        axios.post('https://mighty-lowlands-78607.herokuapp.com/product', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service vh-100">
            <h2 className="fw-bolder text-uppercase text-center mt-5 mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                <span className="text-danger text-left">{errors.name?.type === 'required' && "Product Name is required"}</span>

                <input {...register("shortDescription", { required: true })} placeholder="Short Description" />
                <span className="text-danger text-left">{errors.shortDescription?.type === 'required' && "Short Description is required"}</span>

                <input {...register("longDescription", { required: true })} placeholder="Long Description" />
                <span className="text-danger text-left">{errors.longDescription?.type === 'required' && "Long Description is required"}</span>

                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <span className="text-danger text-left">{errors.price?.type === 'required' && "Price is required"}</span>

                <input {...register("img", { required: true })} placeholder="Image Link" />
                <span className="text-danger text-left">{errors.img?.type === 'required' && "Image link is required"}</span>

                <input className="bg-success btn-lg text-white" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default ProductAdd;