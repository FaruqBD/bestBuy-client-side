import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const { _id, name, price, shortDescription, img, status } = product;
    
    
    return (
        <div className="product pb-3 shadow bg-white rounded">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="booking-price">
                {
                    status? <h5 className="px-3 text-success">Available</h5> : <h5 className="px-3 text-danger">Out of Stock</h5>
                }
            </div>
            <h3 className="px-3 pt-3">{name}</h3>
            <h3 className="px-3 pt-3">${price}</h3>
            <p className="px-3">{shortDescription}</p>
            <Link className="px-3" to={`/product/${_id}`}>
                <button className="btn btn-warning">Buy Now</button>
            </Link>
        </div>
    );
};

export default Product;