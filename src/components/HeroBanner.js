import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../images/banner.png';
const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' },
            }}
            position='relative'
            p='20px'
        >
            <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>
            <Typography
                fontWeight='700'
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb='20px'
                mt='30px'
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={3}>
                Check out the most effective exercises
            </Typography>
            <Button
                href='#exercises'
                color='error'
                variant='contained'
                size='medium'
                sx={{ backgroundColor: '#ff2625', padding: '10px' }}
            >
                Explore Exercise
            </Button>
            <Typography
                fontWeight={600}
                color='#ff2625'
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' },
                }}
                fontSize='200px'
            >
                Exercise
            </Typography>
            <img className='hero-banner-img' src={HeroBannerImg} alt='banner' />
        </Box>
    );
};

export default HeroBanner;
