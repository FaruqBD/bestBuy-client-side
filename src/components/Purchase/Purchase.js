import { Grid, TextField, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const style = {

};
const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { user } = useAuth();
    const initialInfo = { orderBy: user.displayName, email: user.email, uid: user.uid }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    
    //Get product full details from database
    useEffect(() => {
        fetch(`https://mighty-lowlands-78607.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productId])
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }
    //submit purchase information
    const handleOrderSubmit = e => {
        orderInfo.carName = product.name;
        orderInfo.price=product.price;
        orderInfo.status="Pending"; 
        orderInfo.orderDate= new Date().toLocaleDateString()
        // send to the server
        fetch('https://mighty-lowlands-78607.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Successfully');
                }
            });

        e.preventDefault();
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h2" component="h2" mt={4}>
                {product.name}
            </Typography>
            <Grid container spacing={2} my={4}>
                <Grid item xs={12} sm={6}>
                    <CardMedia
                        image={product.img}
                        title={product.name}
                        component="img"
                    />

                    <Typography variant="h4" my={3}>
                        <span>Price : </span> ${product.price}
                    </Typography>
                    <p>Description : {product.longDescription}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" ml={1}>
                            Purchase Product
                        </Typography>
                        <form m={0} onSubmit={handleOrderSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="orderBy"
                                onBlur={handleOnBlur}
                                label={user.displayName}
                                size="small"
                                disabled
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                label={user.email}
                                size="small"
                                disabled
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                label="Phone No"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="address"
                                label="Address"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            
                            <Button type="submit" variant="contained" m={3}>submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;