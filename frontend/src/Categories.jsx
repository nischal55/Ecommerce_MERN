import { useParams } from "react-router-dom";
import CategoryCard from "./components/CategoryCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function Categories() {
    let {category} = useParams();
  return (
    <>
      <Navbar />
      <center>
        <br />
        <br />
        <h2 style={{ color: "grey" }}>Category : {category}</h2>
      </center>
      <div className="container mt-5  d-flex flex-wrap">
        <CategoryCard />
      </div><br /><br />
      <div className="footer p-5" style={{backgroundColor:'black'}}>
      <Footer/>
      </div>
    </>
  );
}

export default Categories;
