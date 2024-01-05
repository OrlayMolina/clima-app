import { useState, createContext } from "react";
import PropTypes from 'prop-types';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {
    return (
        <ClimaContext.Provider
            value={{}}
        >
            {children}
        </ClimaContext.Provider>
    );
}

ClimaProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {
    ClimaProvider
}

export default ClimaContext;