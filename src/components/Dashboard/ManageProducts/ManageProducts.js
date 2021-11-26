import React from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {
    const { user } = useAuth();
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        fetch(`https://mighty-lowlands-78607.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => setProducts(data)
           );
    }, [products, user.uid])

    const handleDelete = id => {
        const url = `https://mighty-lowlands-78607.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Product deleted successfully')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                }
            })
    }
    return (
        <div className="container">
            <h1 className="text-center pb-5" >Manage Cars</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Car Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Short Description</th>
                        <th scope="col">Long Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <th scope="row">{products.indexOf(product) + 1}</th>
                                <td><img src={product.img} alt={product.name} width="100px"/></td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.shortDescription}</td>
                                <td>{product.longDescription}</td>
                                {product.status?<td className = "text-success">Available</td>:<td className = "text-danger">Out of Stock</td>}
                                <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this product?')) handleDelete(product._id) }}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;