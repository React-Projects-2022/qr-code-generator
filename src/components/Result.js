import { Image } from "./Image";
import { downloadImage } from "./../helpers/download-image";
export const Result = ({ qrCode, text }) => (
  <div className="output-box">
    <Image qrCode={qrCode} text={text} />
    <button onClick={() => downloadImage(qrCode, text)} type="button">
      Download
    </button>
  </div>
);
