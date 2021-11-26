import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mighty-lowlands-78607.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    // console.log(products)
    return (
        <div id="products" className="container mt-5 mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12 my-5">
                <div className="section-head pb-40">
                    <h2>Choose Your Favourite Car</h2>
                </div>
            </div>
            <div className="product-container">
                {
                    products.slice(-parseInt(props.limit)).map(product => <Product
                        key={product._id}
                        product={product}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;