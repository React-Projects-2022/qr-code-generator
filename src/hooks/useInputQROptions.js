import { useState } from "react";

export const useInputQROptions = () => {
  const [temp, setTemp] = useState("");
  const [text, setText] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");

  const changeSize = (sizeValue) => setSize(sizeValue);
  const changeBgColor = (bgColorValue) => setBgColor(bgColorValue);
  const asignInputTempText = (tempTextValue) => setTemp(tempTextValue);
  const asignFindText = (textFinalValue) => setText(textFinalValue);
  return {
    size,
    temp,
    text,
    bgColor,
    changeSize,
    changeBgColor,
    asignInputTempText,
    asignFindText,
  };
};
