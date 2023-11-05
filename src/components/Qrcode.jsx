import Qrcodelog from "../assets/QrcodeImage.jpg";
import { Image } from "react-bootstrap";
const QrCode = () => {
  return (
    <>
      <div className="d-grid gap-5 justify-content-center  py-5">
        <Image src={Qrcodelog} fluid />
        <h5 className="text-center">Please Scan Qrcode</h5>
      </div>
    </>
  );
};
export default QrCode;
