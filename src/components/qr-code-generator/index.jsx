import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css"

export default function QRCodeGenerator() {
  const [qrCode, setqrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setqrCode(input);
  }

  return (
    <div>
      <h1>Generador de Codigo QR</h1>
      <div className="qr-input-container">
        <input
        className="qr-text"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Ingresa el texto aqui"
        />
        <button
          disabled={input && input.trim() !== "" ? false : null}
          onClick={handleGenerateQRCode}
        >
          Generar
        </button>
      </div>
      <div>
        <QRCode value={qrCode} />
      </div>
    </div>
  );
}
