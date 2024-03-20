
import Card from "./components/Card";
import Crousel from "./components/Crousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Navbar />
      
      <Crousel />


      <center>
        <br />
        <br />
        <h2 style={{ color: "grey" }}>Our Products</h2>
      </center>
      <div className="container mt-5 d-flex flex-wrap">
        <Card />
      </div>
      <br />
      <div className="footer p-4" style={{backgroundColor:'black'}}>
      <Footer/>
      </div>

    </>
  );
}

export default App;
