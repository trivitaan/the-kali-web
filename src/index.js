import React from 'react';
import ReactDOM from 'react-dom';
import { NavProvider } from '../src/context/NavContext';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <NavProvider>
            <App />
        </NavProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
