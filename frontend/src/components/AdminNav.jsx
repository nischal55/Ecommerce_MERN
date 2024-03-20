import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function AdminNav() {
  const navigate = useNavigate()
  let username = localStorage.getItem("username")
  function logout(){
    localStorage.removeItem("access_token");

    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/AdminProducts`}>
                  Product Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/OrderDetailsAdmin">
                  Order Details
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {username}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                
                 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdminNav;
