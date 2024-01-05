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
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = datos => {
        console.log(datos);
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda, 
                datosBusqueda, 
                consultarClima
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
export default ClimaContext