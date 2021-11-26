import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://mighty-lowlands-78607.herokuapp.com/user/make-admin', {
            method: 'PUT',
            headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert('Admin make Successfully');
                }
            })
            
            e.preventDefault()
    }
    return (
        <div className="container text-center my-5 vh-100">
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" color="success" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;