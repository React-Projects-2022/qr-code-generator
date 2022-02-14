import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [temp, setTemp] = useState("");
  const [text, setText] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const PRINCIPAL_URL = `https://api.qrserver.com/v1/create-qr-code/?data=`;

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `${PRINCIPAL_URL}${text}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [text, size, bgColor, PRINCIPAL_URL]);

  // Updating the input text when user
  // click on the generate button
  function handleClick() {
    setText(temp);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input
            type="text"
            autoFocus={true}
            onChange={(e) => {
              setTemp(e.target.value);
            }}
            placeholder="Enter text to encode"
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input
            type="color"
            onChange={(e) => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5>Dimension:</h5>
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt={"QR Code Image with ".concat(text)} />
        <a
          href={qrCode}
          download target="_blank"
          rel="noreferrer"
        >
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default App;
