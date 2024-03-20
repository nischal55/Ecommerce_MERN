import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSign() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
    console.log(contact)
    axios
      .post('api/users', { username, password, email, role, contact })
      .then(() => {
        navigate('/userLogin')
      });
  };
  return (
    <>
      <div className="col-md-4 col-md-offset-4" id="login">
        <section id="inner-wrapper" className="login">
          <article>
            <form onSubmit={handleSubmit}>
              <h3 className="text-center my-4">User Sign Up</h3>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-user"> </i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope"> </i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-key"> </i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-key"> </i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-key"> </i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success btn-block col-12"
              >
                Submit
              </button>
            </form>
          </article>
        </section>
      </div>
    </>
  );
}

export default UserSign;
