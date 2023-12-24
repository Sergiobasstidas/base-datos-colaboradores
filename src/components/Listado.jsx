import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

function Listado({ colaboradores, eliminarColaborador }) {
  return (
    <div className="listado-container">
      <div className="">
        <Table variant="dark" responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colaborador, index) => (
              <tr key={colaborador.id}>
                <td>{index + 1}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td>
                  <button onClick={() => eliminarColaborador(colaborador.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

Listado.propTypes = {
  colaboradores: PropTypes.array.isRequired,
  eliminarColaborador: PropTypes.func.isRequired,
};

export default Listado;
