// App.jsx
import { useState, useEffect } from "react";
import Listado from "../src/components/Listado.jsx";
import Formulario from "../src/components/Formulario";
import Buscador from "../src/components/Buscador";
import Alert from "../src/components/Alerta";
import { BaseColaboradores } from "./BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores((colaboradoresActuales) => [
      ...colaboradoresActuales,
      nuevoColaborador,
    ]);
    setMensaje("Colaborador agregado exitosamente");
  };

  useEffect(() => {
    console.log("Colaboradores actualizados:", colaboradores);

    const terminoBusquedaLowerCase = terminoBusqueda.toLowerCase();
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(terminoBusquedaLowerCase) ||
        colaborador.correo.toLowerCase().includes(terminoBusquedaLowerCase) ||
        colaborador.edad.toString().includes(terminoBusquedaLowerCase) ||
        colaborador.cargo.toLowerCase().includes(terminoBusquedaLowerCase) ||
        colaborador.telefono.toLowerCase().includes(terminoBusquedaLowerCase)
      );
    });
    setColaboradoresFiltrados(colaboradoresFiltrados);
  }, [colaboradores, terminoBusqueda]);

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
    setMensaje("Colaborador eliminado exitosamente");
  };

  return (
    <div className="container">
      <h1 className="mb-4">Gestión de Colaboradores</h1>

      <div className="">
        <div className="container-form">
          <div>
            <Buscador
              colaboradores={colaboradores}
              setTerminoBusqueda={setTerminoBusqueda}
            />
            <Listado
              className="listado-container"
              colaboradores={
                colaboradoresFiltrados !== null ? colaboradoresFiltrados : [] // Usamos un array vacío si no hay coincidencias
              }
              eliminarColaborador={eliminarColaborador}
            />
          </div>

          <Formulario
            className="form-container"
            setMensaje={setMensaje}
            agregarColaborador={agregarColaborador}
          />
        </div>
      </div>
      <Alert
        mensaje={mensaje}
        variante={mensaje.includes("exitosamente") ? "success" : "danger"}
        onClose={() => setMensaje("")}
      />
    </div>
  );
};

export default App;
