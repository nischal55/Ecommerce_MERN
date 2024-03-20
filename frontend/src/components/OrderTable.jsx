import { useEffect, useState } from "react";
import axios from "axios";


function OrderTable() {
    const [orders,setOrders]= useState([]);
    let token = localStorage.getItem('access_token');
    useEffect(()=>{
        axios.get('/api/order',{headers:{
            Authorization:token
        }}).then((res)=>{setOrders(res.data)})
    },[]) 
    let count = 0 ; 
    return(
    
    orders.map((order)=>{
      count = count+1;
  return (

    <>
     
        <tbody >
          <tr>
            <th scope="row">{count}</th>
            <td><img src={"../"+order.product_id.image} height={60}/></td>
            <td>{order.product_id.productName}</td>
            <td>{order.product_id.price}</td>
            <td>{order.quantity}</td>
            <td>{parseInt(order.product_id.price)*parseInt(order.quantity)}</td>
            <td>{order.status}</td>
            <td>{order.payment_method}</td>
         
          </tr>
        </tbody>
    
    </>
  )
})
    )
} 
    



export default OrderTable;