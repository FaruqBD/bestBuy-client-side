import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const StarRating = ({value}) => {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >

            <Rating name="read-only" value={value} readOnly />
        </Box>
    );

};

export default StarRating;