import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchCard from "./components/SearchCard";


function SearchResult() {
  return (
    <>
      <Navbar />
      <center>
        <br />
        <br />
        <h2 style={{ color: "grey" }}>Search Results</h2>
      </center>
      <div className="container mt-5 d-flex flex-wrap">
        <SearchCard />
      </div>
      <br />
      <div className="footer p-5" style={{backgroundColor:'black'}}>
      <Footer/>
      </div>
    </>
  );
}

export default SearchResult;
