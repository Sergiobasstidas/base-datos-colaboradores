import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Alert = ({ mensaje, variante, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    if (mensaje && onClose) {
      setVisible(true);

      timeoutId = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [mensaje, onClose]);

  return (
    <div>
      {visible && mensaje && (
        <div className={`alert alert-${variante}`} role="alert">
          {mensaje}
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  mensaje: PropTypes.string.isRequired,
  variante: PropTypes.oneOf(["success", "danger"]).isRequired,
  onClose: PropTypes.func,
};

export default Alert;
