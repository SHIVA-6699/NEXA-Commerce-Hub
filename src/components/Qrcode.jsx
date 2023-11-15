import Qrcodelog from "../assets/QrcodeImage.jpg";
import { Image } from "react-bootstrap";
const QrCode = () => {
    const cart_num = window.localStorage.getItem("cartnum");
    const cart_price = window.localStorage.getItem("itemprice");
    const totalprice = cart_num==0 ? cart_price : cart_num * cart_price * 2;
  return (
    <>
      <div className="d-grid gap-5 justify-content-center  py-5">
        <Image src={Qrcodelog} fluid />
        <h5 className="text-center">Please Scan Qrcode</h5>
      </div>
        <h6 className="text-center">Total :{totalprice}</h6>
    </>
  );
};
export default QrCode;
