import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';


import './index.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>

        {/* <FirstApp title="Hola, soy Vegeta" /> */}
        <CounterApp value={123} />
    </React.StrictMode>
)