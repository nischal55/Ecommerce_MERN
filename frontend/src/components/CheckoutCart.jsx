import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function CheckoutCart() {

    let token = localStorage.getItem("access_token");
    const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("api/cart", { headers: { Authorization: token } })
      .then((res) => setProducts(res.data));
  }, []);
  let cart_total = 0;
 
    products.map((product)=>{
     console.log(product);
     let total = parseInt(product.product_id.price*product.quantity)
     cart_total = cart_total +total;
    })
    return (
        <>
            <div className="col-lg-4">
              <div className="cart-totals">
                <h3>Cart Totals</h3>
                <form action="#" method="get">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td className="subtotal">Rs.{cart_total}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td className="free-shipping">Free Shipping</td>
                      </tr>
                      <tr className="total-row">
                        <td>Total</td>
                        <td className="price-total">Rs.{cart_total}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-cart-totals">
                    
                    <Link type="submit"  className="btn btn-success px-3" to={`/payment/`+cart_total} >Esewa</Link>
                    <Link type="submit"  className="btn btn-danger px-3" to={`/cashPay`}>Cash</Link>
                   
                  
                  </div>
                </form>
              </div>
            </div>
        </>
    );




}

export default CheckoutCart;