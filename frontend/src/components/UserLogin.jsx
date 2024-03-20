import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserLogin() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate()
    
  function handleSubmit(event){
    event.preventDefault();
      axios.post('api/users/login',{username,password}).then((res)=>{
        
        toast.success("Login Succesfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
         
      });
        localStorage.setItem("access_token", res.data.access_token)
        localStorage.setItem("username",res.data.users.username)
      navigate('/');
      }).catch(() =>{
        toast.error("Inavld creadentails")
        // when status code 3,4,5 
      })
      
    
  }


  
  // if(localStorage.setItem('userToken',userToken.access_token))
  // window.location.href='http://localhost:5173/'

  return (
    <>
  
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h2 className="text-center mb-5">User Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <label className="form-label">Username</label>
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                  />
                </div>

                <div className="d-flex justify-content-around mb-4 ">
                  
                  <Link to="/userSign">Create a new account</Link>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block w-100"
                  
                >
                  Sign in
                </button>
                

              

               
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserLogin;
