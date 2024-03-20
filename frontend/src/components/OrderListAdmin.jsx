import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
function OrderListAdmin() {
    const navigate = useNavigate();


    const [orders,setOrders]= useState([]);
    let token = localStorage.getItem('access_token');
    useEffect(()=>{
        axios.get('/api/orderAdmin',{headers:{
            Authorization:token
        }}).then((res)=>{setOrders(res.data)})
    },[]) 
    let count =0;

   
    return(
    

    
    orders.map((order)=>{
        count=count+1;
        function handleDelivery(){
            axios.put(`/api/order/${order._id}`,{},{headers:{
                Authorization:token
            }}).then(()=>{
                toast.success("Status Changed Succesfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                navigate('/admin');
            })
        }
        function handleComplete(){
            axios.put(`/api/orderComplete/${order._id}`,{},{headers:{
                Authorization:token
            }}).then(()=>{
                toast.success("Status Changed Succesfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                navigate('/admin');
            })
        }
    return (
        <>
    
        <tbody >
          <tr>
            <th scope="row">{count}</th>
            <td><img src={"../"+order.product_id.image} height={60}/></td>
            <td>{order.user_id.username}</td>
            <td>{order.user_id.contact}</td>
            <td>{order.product_id.productName}</td>
            <td>{order.product_id.price}</td>
            <td>{order.quantity}</td>
            <td>{parseInt(order.product_id.price)*parseInt(order.quantity)}</td>
            <td>{order.status}</td>
            <td>{order.payment_method}</td>
            <td>
            <button className="btn btn-outline-primary mx-2" onClick={handleDelivery}>Delivery</button>
           <button className="btn btn-outline-success" onClick={handleComplete}>Complete</button>
            </td>
          </tr>
        </tbody> 
        
        </>
        
    );
   
})

)
}

export default OrderListAdmin;