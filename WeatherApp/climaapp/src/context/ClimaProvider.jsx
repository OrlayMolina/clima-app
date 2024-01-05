import { useState, createContext } from "react";
import PropTypes from 'prop-types';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {


    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.value]: e.target.value
        });
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda, 
                datosBusqueda
            }}
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