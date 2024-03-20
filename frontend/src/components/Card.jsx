import axios from 'axios'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card() {
    const [products,setproducts]= useState([]);
useEffect(()=>{
    axios.get('/api/products').then((res)=>{setproducts(res.data)})
},[])
return(
products.map((product)=>{
  return (
    <>
      <Link style={{textDecoration: 'none'}}  to={`/product/${product._id}`}>
        <div className="card m-1 border-0 rounded-0"  id="productCard" style={{ width: "11rem", height: "16rem",backgroundColor:'white' }}>
        {/* <div className="imgPart " style={{width:'100%',height:'10rem'}}> */}
         <center><img src={product.image} alt="" height={150} width={174}/></center> 
          {/* </div> */}
        <div className="m-auto p-2 text-center" style={{color:'#4B4A4A',height:"5rem",fontSize:"16px"}}>{product.productName} 
        <p className="mx-auto mt-2 text-center" style={{color:'red',fontSize:"18px",fontFamily:'Sans-serif'}}>Rs.{product.price}</p>
        </div>
      </div>
      </Link>
    </>
  );
})
)}

export default Card;
