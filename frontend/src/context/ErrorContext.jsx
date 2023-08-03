// Importamos las dependencias y los hooks.
import React, { useContext, createContext, useState } from 'react';

// Creamos el contexto.
const ErrorContext = createContext();

// Creamos y exportamos el componente Provider.
export function ErrorProvider({ children }) {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <ErrorContext.Provider
            value={{
                errorMessage,
                setErrorMessage,
            }}
        >
            {children}
        </ErrorContext.Provider>
    );
}

export function useError() {
    return useContext(ErrorContext);
}
