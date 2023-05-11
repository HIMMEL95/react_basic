import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import logo from "./MZC_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div className="App container-lg">
      <header className="App-header">
        <div>
          <div className="card" style={{ width: "50rem" }}>
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="mb-3">
                      <label htmlFor="inputId" className="form-label">
                        ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputId"
                        placeholder="아이디를 입력하세요"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <label htmlFor="inputPw" className="form-label">
                        Password
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputPw"
                        placeholder="비밀번호를 입력하세요"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <button type="submit" className="btn btn-dark loginBtn">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <a href="#" className="btn forgetBtn">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-google btn-lg w-100"
                      >
                        <FontAwesomeIcon icon={faGoogle} className="me-2" />
                        Google
                      </a>
                    </div>
                    <div className="col mb-3">
                      <a
                        href="#"
                        className="btn btn-icon btn-secondary btn-facebook btn-lg"
                      >
                        <FontAwesomeIcon icon={faFacebook} className="me-2" />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col img">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
