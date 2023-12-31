import React from 'react';
import { Route, Routes } from 'react-router';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

export const App = () => {
    return (
        <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercise/:id' element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Box>
    );
};
