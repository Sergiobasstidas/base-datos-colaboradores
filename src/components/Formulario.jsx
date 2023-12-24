import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ setMensaje, agregarColaborador }) => {
  const [contadorId, setContadorId] = useState(1);
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleAgregarColaborador = () => {
    if (
      !nuevoColaborador ||
      Object.values(nuevoColaborador).some((value) => value === "")
    ) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    const id = contadorId.toString().padStart(3, "0");

    agregarColaborador({ ...nuevoColaborador, id });
    setMensaje("Colaborador agregado exitosamente");

    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });

    setContadorId(contadorId + 1);
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <Form>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            value={nuevoColaborador.nombre}
            onChange={(e) =>
              setNuevoColaborador({
                ...nuevoColaborador,
                nombre: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            type="text"
            value={nuevoColaborador.correo}
            onChange={(e) =>
              setNuevoColaborador({
                ...nuevoColaborador,
                correo: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="formEdad">
          <Form.Label>Edad:</Form.Label>
          <Form.Control
            type="number"
            value={nuevoColaborador.edad}
            onChange={(e) =>
              setNuevoColaborador({ ...nuevoColaborador, edad: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formCargo">
          <Form.Label>Cargo:</Form.Label>
          <Form.Control
            type="text"
            value={nuevoColaborador.cargo}
            onChange={(e) =>
              setNuevoColaborador({
                ...nuevoColaborador,
                cargo: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono:</Form.Label>
          <Form.Control
            type="text"
            value={nuevoColaborador.telefono}
            onChange={(e) =>
              setNuevoColaborador({
                ...nuevoColaborador,
                telefono: e.target.value,
              })
            }
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          className="my-4"
          onClick={handleAgregarColaborador}
        >
          Agregar Colaborador
        </Button>
      </Form>
    </div>
  );
};

Formulario.propTypes = {
  setMensaje: PropTypes.func.isRequired,
  agregarColaborador: PropTypes.func.isRequired,
};

export default Formulario;
