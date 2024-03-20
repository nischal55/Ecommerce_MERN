import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Navbar() {
  const [search, setSearch] = useState("");
  let token;
  token = localStorage.getItem("access_token");
  let username = localStorage.getItem("username")
  let loginStatus = false;

  if (token != null) {
    loginStatus = true;
  
  }
  const navigate = useNavigate()
function logout(){
  localStorage.removeItem("access_token");
  navigate('/')
}


  return (
    <>
  
      <nav
        className="navbar navbar-expand-lg sticky-top bg-body-tertiary p-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">
            Ocean Optics
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="d-flex" role="search" style={{ width: "75%" }}>
              <input
                id="searchItem"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Link
                className="btn btn-outline-secondary"
                to={`/search/${search}`}
              >
                Search
              </Link>
            </form>
            <ul className="navbar-nav ms-auto mx-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown id='afterLogin'">
                <Link className="nav-link" to={loginStatus?`/Cart`:`/userLogin`}>
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown id='afterLogin' ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={`/categories/sunglasses`}>
                          Sunglasses
                        </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item" to={`/categories/powerGlasses`}>
                          Power Glasses
                        </Link>
                      </li>
                    </ul>
                  </li>
              {!loginStatus ? (
                <>
                  <li className="nav-item" id="beforeLogin">
                    <Link className="nav-link" to={`/userLogin`}>
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown id='afterLogin' ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     {username} 
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={`/orders`}>
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <button className="dropdown-item" href="#" onClick={logout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
