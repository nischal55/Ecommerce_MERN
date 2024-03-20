import AdminNav from "../components/AdminNav";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminDash() {
    const navigate = useNavigate();
        let token;
        token = localStorage.getItem("access_token");
        let loginStatus = false;
      
        if (token != null) {
          loginStatus = true;
        
        } 
    
    return (
        <>
     {
        loginStatus?<><AdminNav/> <ToastContainer/> </> : navigate('/userLogin')
     }
            
            
        </>
    );
}

export default AdminDash;