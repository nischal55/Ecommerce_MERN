import Cart from "./components/Cart";
import CheckoutCart from "./components/CheckoutCart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function ShoppingCart() {
  
  
  return (

    <>
      <Navbar />
      <div className="cart-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-heading">Shopping Cart</div>
              <div className="table-cart">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <Cart/>
                </table>
              </div>
            </div>
            <CheckoutCart/>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="footer p-5" style={{ backgroundColor: "black" }}>
        <Footer />
      </div>
    </>
  );

}

export default ShoppingCart;
