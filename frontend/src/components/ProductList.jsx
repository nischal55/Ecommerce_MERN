import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
    const [products,setProducts]= useState([]);
    let token = localStorage.getItem('access_token');
    useEffect(()=>{
        axios.get('/api/products',{headers:{
            Authorization:token
        }}).then((res)=>{setProducts(res.data)})
    },[]) 
    let count =0;
    return (
    products.map((product)=>{
        count= count +1;
    return (
        <>
        <tbody >
          <tr>
            <th scope="row">{count}</th>
            <td><img src={"../"+product.image} height={60}/></td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{parseInt(product.price)*parseInt(product.quantity)}</td>

           
          </tr>
        </tbody>
        </>
    );
})
    )
}

export default ProductList;