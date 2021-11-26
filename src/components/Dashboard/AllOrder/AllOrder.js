import React from 'react';

const AllOrder = () => {
    const [orders, setOrders] = React.useState([])
    React.useEffect(() => {
        fetch(`https://mighty-lowlands-78607.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => setOrders(data)
           );
    }, [orders])
    
    const handleUpdate = (orderId, status) =>{
        fetch(`https://mighty-lowlands-78607.herokuapp.com/order/${orderId}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: status})
        })
        .then(alert('Order status updated successfully'))
    }

    const handleDelete = id => {
        const url = `https://mighty-lowlands-78607.herokuapp.com/order-delete/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Order deleted successfully')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
    }
    return (
        <div className="container vh-100">
            <h1 className="text-center pb-5" >All Orders</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Car Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       
                        orders.map(order =>
                            <tr>
                                <th scope="row">{orders.indexOf(order) + 1}</th>
                                <td>{order.orderBy}</td>
                                <td>{order.carName}</td>
                                <td>${order.price}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order?.status}</td>
                                <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this order?')) handleDelete(order._id) }}>Delete</button></td>
                                {order.status === 'Pending' && <td><button className="btn btn-info" onClick={() => {handleUpdate(order._id, 'Confirm') }}>Confirm</button></td>}
                                {order.status === 'Confirm' && <td><button className="btn btn-success" onClick={() => {handleUpdate(order._id, 'Shiped') }}>Ship</button></td>}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrder;