import axios from 'axios'
import { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';

function CategoryCard() {
    const [products,setproducts]= useState([]);
    let {category} = useParams();

useEffect(()=>{
    axios.get('/api/products/category/'+category).then((res)=>{setproducts(res.data)})

},[category])

  
return(
products.map((product)=>{
  return (
    <>
      <Link style={{textDecoration: 'none'}}  to={`/product/${product._id}`}>
        <div className="card  m-1 border-0 rounded-0" id="productCard" style={{ width: "11rem", height: "16rem" }}>
        <div className="imgPart " style={{width:'100%',height:'10rem'}}>
         <center><img src={'../'+product.image} alt="" height={150} width={173}/></center> 
          </div>
        <div className="m-auto p-2 text-center" style={{color:'4B4A4A',height:"5rem",fontSize:"16px"}}>{product.productName}
        <p className="mx-auto mt-2 text-center" style={{color:'red',fontFamily:'Sans-serif',fontSize:"18px"}}>Rs.{product.price}</p>
        
        </div>
      </div>
      </Link>
    </>
  );
})
)}
export default CategoryCard;
