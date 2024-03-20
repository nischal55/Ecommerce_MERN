import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  let token = localStorage.getItem("access_token");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  

  useEffect(() => {
    axios
      .get("api/cart", { headers: { Authorization: token } })
      .then((res) => setProducts(res.data));
  }, []);
return (
    products.map((product)=>{
     console.log(product);
     let total = parseInt(product.product_id.price*product.quantity)
     function deleteCart(){
      axios.delete('/api/cart/'+product._id, { headers: { Authorization: token } }).then((res)=>{
        console.log(res.data);
        toast.error("Removed from Cart", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
         
      });
        navigate('/')
      })
      
    }
  return (
    <>
      <tbody>
        <tr>
          <td>
            <div className="display-flex align-center">
              <div className="img-product">
                <img
                  src={product.product_id.image}
                  alt=""
                  className="mCS_img_loaded"
                />
              </div>
              <div className="name-product">
                {product.product_id.productName}
               
              </div>
              <div className="price">Rs.{product.product_id.price}</div>
            </div>
          </td>
          <td className="mx-4" style={{ color: "grey" }}>
            {product.quantity}
          </td>
          <td>
            <div className="total">Rs.{total}</div>
          </td>
          <td>
            <a href="#" className="btn btn-danger" onClick={deleteCart}>
              Remove
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
})
)
}

export default Cart;
