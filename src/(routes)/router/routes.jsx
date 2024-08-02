import React from 'react'
import App from '../App.jsx';
import {Home, About, Portfolio, _Skills} from '../index.js';


const routes =[
{
    path:'/',
    element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
            {
                path: 'skills',
                element: <_Skills />
            },
        ],
    },
];

export default routes;
