import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderSave() {
    const navigate = useNavigate()
    let token = localStorage.getItem("access_token");
    axios.get('api/order/esewa',{headers:{Authorization:token}}).then((res)=>{
        
        console.log(res.data);
        toast.success("Order Succesfully Placed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           
        });
        navigate('/');
        })
    return (
        <>
            
        </>
    );
}

export default OrderSave;