export const InputBox = ({
  size,
  temp,
  changeSize,
  changeBgColor,
  asignInputTempText,
  asignFindText,
}) => {
  const handleClick = () => asignFindText(temp);
  return (
    <div className="input-box">
      <div className="gen">
        <input
          type="text"
          autoFocus={true}
          onChange={(e) => {
            asignInputTempText(e.target.value);
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
            changeBgColor(e.target.value.substring(1));
          }}
        />
        <h5>Dimension:</h5>
        <input
          type="range"
          min="200"
          max="600"
          value={size}
          onChange={(e) => {
            changeSize(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
