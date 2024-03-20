import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import Navbar from "./components/Navbar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductDetails() {
    let [count,setCount] = useState(1);
    const navigate = useNavigate();

    function handleMinus(){
      if(count>1)
      count = count-1;
      setCount(count)
    }
    function handlePlus(){
      count = count+1;
      setCount(count)
    }

    const [products,setProduct]=useState([]);
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        axios.get('/api/products/'+id).then((res)=>setProduct(res.data))
      },[])
      function addToCart(){
        let token = localStorage.getItem('access_token')
        axios.post('/api/cart',{product_id:id,quantity:count},{headers:{Authorization:token}}).then((res)=>{
          console.log(res.data)
          toast.success("Added to Cart", {
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
        <Navbar/>
            <div className="container d-flex flex-wrap mt-4">
                <div className="card m-3">
                  <img src={'../'+products.image} alt="" height={450} width={350}/>
                </div>
                <div className="card p-4 m-3" style={{width:'22rem'}}>
                  <h2>{products.productName}</h2>
                  
                  <h3 style={{color:'red'}}>Rs. {products.price}</h3>
                  <div className="counter d-flex">
                  <button className="btn btn-danger" onClick={handleMinus}>-</button>
                  <input type="text" name="" id="" style={{border:"none",width:"4rem"}} value={count} className="text-center" readOnly/>
                  <button className="btn btn-primary" onClick={handlePlus}>+</button>
                  </div>
                  
                  <div className="container mt-3">
                  <button className="btn btn-warning col-11 m-2" onClick={addToCart}>Add to Cart</button>
                  
                  </div>
                  <hr />
                  <div className="productDesc">
                  <h4 className="mt-1">Description</h4>
                  <p style={{textAlign:'justify'}}>
                    {products.product_desc}
                  </p>
                  </div>
                </div>
                <div className="card p-4 m-3" style={{width:'19rem',height:'28.2rem'}}>
                  <div className="card p-2">
                  Delivery <br />
                    Bagmati, kathmandu Metro 22- Newroad Area, Newroad
                  </div>
                  <div className="card p-2 mt-1">
                    Free Delivery <br />
                    Bagmati, kathmandu Metro 22- Newroad Area, Newroad
                  </div>
                  <div className="card p-2 mt-1">
                    Cash on Delivery | Esewa
                  </div>
                  <div className="card p-2 mt-1">
                    Service <br />
                    7 Days Return <br />
                    Warranty not Available
                  </div>
                 
                </div>
              </div>
            
        </>
    );
}

export default ProductDetails;