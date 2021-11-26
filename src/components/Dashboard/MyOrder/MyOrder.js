import * as React from 'react';
import useAuth from '../../../hooks/useAuth';
const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = React.useState([])
    React.useEffect(() => {
        fetch(`https://mighty-lowlands-78607.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => {
                const myOrders = data.filter(order => order.uid === user.uid);
                setOrders(myOrders);
            });
    }, [orders, user.uid])

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
        <div className="container">
            <h1 className="text-center pb-5" >My Orders</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Car Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr>
                                <th scope="row">{orders.indexOf(order) + 1}</th>
                                <td>{order.carName}</td>
                                <td>${order.price}</td>
                                <td>{order.orderDate}</td>
                                <td>{order?.status}</td>
                                {order.status === 'Pending' && <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this order?')) handleDelete(order._id) }}>Delete</button></td>}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;