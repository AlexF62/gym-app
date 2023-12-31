import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');

    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartyData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exerciseOptions
            );

            setBodyParts(['all', ...bodyPartyData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exerciseOptions
            );

            const searchExercises = exerciseData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchExercises);
        }
    };

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography
                fontWeight='700'
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb='50px'
                textAlign='center'
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{ input: { fontWeight: '700' } }}
                    color='error'
                    id='outlined-basic'
                    label='Outlined'
                    variant='outlined'
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                    size='medium'
                />
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '17px' },
                        height: '55px',
                        position: 'absolute',
                        ml: '20px',
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyParts={setBodyParts}
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
