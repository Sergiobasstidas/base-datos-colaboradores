import { useState } from "react";
import PropTypes from "prop-types";

const Buscador = ({ setTerminoBusqueda }) => {
  const [terminoBusqueda, setTerminoBusquedaLocal] = useState("");

  const handleInputChange = (e) => {
    const nuevoTermino = e.target.value;
    setTerminoBusquedaLocal(nuevoTermino);
    setTerminoBusqueda(nuevoTermino);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar colaborador"
        value={terminoBusqueda}
        onChange={handleInputChange}
        className="mx-1 mb-2"
      />
    </div>
  );
};

Buscador.propTypes = {
  setTerminoBusqueda: PropTypes.func.isRequired,
};

export default Buscador;
