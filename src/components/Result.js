import { Image } from "./Image";

export const Result = ({ qrCode, text }) => (
  <div className="output-box">
    <Image qrCode={qrCode} text={text} />
    <a href={qrCode} download target="_blank" rel="noreferrer">
      <button type="button">Download</button>
    </a>
  </div>
);
