import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const { _id, name, img } = brand;

    return (
        <div className="brand">
            <div>
                <img src={img} width="100"  alt="" />
            </div>
            <Link className="px-3 text-decoration-none" to={`/brand/details/${_id}`}>
                <h6 >{name}</h6>
            </Link>
        </div>
    );
};

export default Brand;