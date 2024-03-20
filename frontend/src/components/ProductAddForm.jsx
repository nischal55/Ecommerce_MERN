import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function ProductAddForm() {
    const navigate = useNavigate();
     const[productName,setProductName]=useState('');
     const[price,setPrice]=useState('');
     const[quantity,setQuantity]=useState('');
     const[category,setCategory]=useState('');
     const[productDesc,setProductDesc]=useState('');
     const[image,setImage]=useState('');

function handleSubmit(e){
  
  let token = localStorage.getItem("access_token");
  e.preventDefault();

  axios.post('api/products',{productName:productName,price,quantity,image,product_desc:productDesc,category},{headers:{Authorization:token}}).then((res)=>{
    console.log(res.data)
    toast.success("Added Product Succesfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })
      navigate('/admin')
 } )}



  return (
    <>
    <ToastContainer/>
      <button
        className="btn btn-dark float-end mb-4 mx-5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Add New products
      </button>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-center" id="offcanvasScrollingLabel">
            Add New Products
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
         <form onSubmit={handleSubmit}>
            <label htmlFor="productName">Product Name:</label><br />
            <input type="text" name="productName" id="productName" onChange={(e)=>{setProductName(e.target.value)}} className="form-control col-12" required />
            <label htmlFor="quantity">Quantity:</label><br />
            <input type="number" name="quantity" id="quantity" onChange={(e)=>{setQuantity(e.target.value)}} className="form-control col-12" required />
            <label htmlFor="Price">Price:</label><br />
            <input type="number" name="price" id="" className="form-control col-12" onChange={(e)=>{setPrice(e.target.value)}} required />
            <label htmlFor="Category">Category:</label><br />
            <select className="form-control col-12" onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="empty">Please Select Category</option>
                <option value="sunglasses">Sunglasses</option>
                <option value="powerGlasses">Power Glasses</option>
            </select><br />
            <label htmlFor="productDesc">Product Description:</label><br />
            <textarea name="" id="" cols="40" rows="5" className="form-control" onChange={(e)=>{setProductDesc(e.target.value)}}></textarea>
            <label htmlFor="productImage">Product Image:</label><br />
            <input type="file" name="productImage" id="" className="form-control col-12" onChange={()=>{setImage('uploads/polariedRay.jpg')}} required />
            <input className="btn btn-dark col-12 mt-4" type="submit" value="Submit" />
         </form>
        </div>
      </div>
    </>
  );
}

export default ProductAddForm;
