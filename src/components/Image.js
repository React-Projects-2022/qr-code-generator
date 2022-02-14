export const Image = ({ qrCode, text }) => (
  <img src={qrCode} alt={"QR Code Image with ".concat(text)} />
);
