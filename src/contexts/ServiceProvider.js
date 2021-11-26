import React, { createContext } from 'react';
import useContextServices from '../hooks/useContextServices';

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
    const allContext = useContextServices();
    console.log(allContext);
    return (
        <ServiceContext.Provider value={allContext}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;