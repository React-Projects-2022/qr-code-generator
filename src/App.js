import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { InputBox } from "./components/InputBox";
import { Result } from "./components/Result";
import { useInputQROptions } from "./hooks/useInputQROptions";
import "./index.css";

function App() {
  const {
    size,
    temp,
    text,
    bgColor,
    changeSize,
    changeBgColor,
    asignInputTempText,
    asignFindText,
  } = useInputQROptions();
  const [qrCode, setQrCode] = useState("");
  const PRINCIPAL_URL = `https://api.qrserver.com/v1/create-qr-code/?data=`;
  const props = {
    size,
    temp,
    changeSize,
    changeBgColor,
    asignInputTempText,
    asignFindText,
  };

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `${PRINCIPAL_URL}${
        text === "" ? "!" : text
      }&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [text, size, bgColor, PRINCIPAL_URL]);

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <InputBox {...props} />
      <Result qrCode={qrCode} text={text} />
      <Footer />
    </div>
  );
}

export default App;
