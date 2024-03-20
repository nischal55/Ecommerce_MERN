import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import { useParams } from 'react-router-dom';

function Payment() {
  let{total} = useParams();

    //var cart_total = 1200;
    var transaction_uid = Math.floor(Math.random() * (999999 - 100000 + 1) ) + 100000
    var string_total = total.toString();
    var message = "total_amount="+string_total+",transaction_uuid="+transaction_uid+",product_code=EPAYTEST"
    var hash = hmacSHA256(message, "8gBm/:&EnhH.1/q");
    var hashInBase64 = Base64.stringify(hash);
    console.log(hashInBase64)
   
  return (
    <>
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input type="text" id="amount" name="amount" value={string_total} required />
        <input
          type="text"
          id="tax_amount"
          name="tax_amount"
          value="0"
          required
        />
        <input
          type="text"
          id="total_amount"
          name="total_amount"
          value={string_total}
          required
        />
        <input
          type="text"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transaction_uid}
          required
        />
        <input
          type="text"
          id="product_code"
          name="product_code"
          value="EPAYTEST"
          required
        />
        <input
          type="text"
          id="product_service_charge"
          name="product_service_charge"
          value="0"
          required
        />
        <input
          type="text"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value="0"
          required
        />
        <input
          type="text"
          id="success_url"
          name="success_url"
          value={`http://localhost:5173/orderSave`}
          required
        />
        <input
          type="text"
          id="failure_url"
          name="failure_url"
          value="https://google.com"
          required
        />
        <input
          type="text"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />
        <input type="text" id="signature" name="signature" value={hashInBase64} required />
        <input value="Submit" id='esewa' type="submit" />

      </form>
    </>
  );
}

export default Payment;
