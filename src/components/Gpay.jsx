import GooglePayButton from "@google-pay/button-react";
import React from "react";
import { Alert } from "react-bootstrap";

function Gpay() {
  const price = window.localStorage.getItem("cartnum");
  const totalprice = price * 100;
  return (
    <>
      <div className="App">
        <h1></h1>
        <hr />
        {window.localStorage.setItem("paymentstatus", "payment not completed")}
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Shiva krishna",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: JSON.stringify(totalprice),
              currencyCode: "INR",
              countryCode: "IN",
            },
            shippingAddressRequired: true,
            callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("Success", paymentRequest);
            window.localStorage.setItem("paymentstatus", "Success");
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log("Payment Authorised Success", paymentData);
            return { transactionState: "SUCCESS" };
          }}
          onPaymentDataChanged={(paymentData) => {
            console.log("On Payment Data Changed", paymentData);
            return {};
          }}
          existingPaymentMethodRequired="false"
          buttonColor="black"
          buttonType="Buy"
        />
      </div>
    </>
  );
}

export default Gpay;
