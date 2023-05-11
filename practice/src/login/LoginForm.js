import React, { Component } from "react";
import Login from "./Login";

class LoginForm extends Component {
  submitData = (e) => {
    const { name, value } = e.target;
    var id = document.getElementById("inputId").value;
    var pw = document.getElementById("inputPw").value;
    this.setState({
      name: value,
    });
    alert(id + " " + pw);
  };

  render() {
    const { getInput } = this.props;
    return (
      <form>
        <div className="row">
          <div className="mb-3">
            <label htmlFor="inputId" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="inputId"
              placeholder="아이디를 입력하세요"
              onChange={this.props.getInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label htmlFor="inputPw" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPw"
              placeholder="비밀번호를 입력하세요"
              onChange={this.props.getInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-dark loginBtn"
              onClick={this.submitData}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
