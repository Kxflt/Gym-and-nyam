import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { ErrorProvider } from './context/ErrorContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </ErrorProvider>
        </BrowserRouter>
    </React.StrictMode>
);
