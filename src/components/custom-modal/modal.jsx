import "./modal.css";

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          {header ? header : <h2>Cabecera</h2>}
        </div>

        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>Este es el Cuerpo del Modal</p>
            </div>
          )}
        </div>

        <div className="footer">{footer ? footer : <h2>Pie de Pagina</h2>}</div>
      </div>
    </div>
  );
}
