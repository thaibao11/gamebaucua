import React, { Component } from "react";
import "./UserProfile.css";
import Swal from "sweetalert2";
class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConFirm: "",
    },

    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConFirm: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let { values, errors } = this.state;
    let valid = true;

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      Swal.fire({
        title: "Đã có lỗi!",
        text: "Vui lòng điền đầy đủ thông tin",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }
    Swal.fire({
      title: "Thành Công",
      text: "Bạn đã đăng ký thành công",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };
  handleInput = (e) => {
    let { name, value, type } = e.target;

    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };

    if (value.trim() === "") {
      newError[name] = name + " is required!";
    }

    if (type === "email") {
      let regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        newError[name] = name + " not valid!";
      } else {
        newError[name] = "";
      }
    }

    if (name === "passWordConFirm") {
      if (value !== newValue["passWord"]) {
        newError[name] = name + "password is wrong!1";
      } else {
        newError[name] = "";
      }
    }

    this.setState({
      values: newValue,
      errors: newError,
    });
  };
  render() {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <h1 className="text-center">User Profile</h1>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input
                      value={this.state.values.firstName}
                      name="firstName"
                      type="text"
                      required
                      onChange={(e) => this.handleInput(e)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>First Name</label>
                    <span className="text-danger">
                      {this.state.errors.firstName}
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="group">
                    <input
                      value={this.state.values.lastName}
                      name="lastName"
                      type="text"
                      required
                      onChange={(e) => this.handleInput(e)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Last Name</label>
                    <span className="text-danger">
                      {this.state.errors.lastName}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="group">
                    <input
                      value={this.state.values.userName}
                      name="userName"
                      type="text"
                      required
                      onChange={(e) => this.handleInput(e)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Username</label>
                    <span className="text-danger">
                      {this.state.errors.userName}
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="group">
                    <input
                      value={this.state.values.email}
                      name="email"
                      type="email"
                      required
                      onChange={(e) => this.handleInput(e)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
                    <span className="text-danger">
                      {this.state.errors.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="group">
                    <input
                      value={this.state.values.passWord}
                      name="passWord"
                      type="password"
                      required
                      onChange={(e) => this.handleInput(e)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                    <span className="text-danger">
                      {this.state.errors.passWord}
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="group">
                    <input
                      value={this.state.values.passWordConFirm}
                      name="passWordConFirm"
                      type="password"
                      required
                      onChange={(e) => this.handleInput(e)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password confirm</label>
                    <span className="text-danger">
                      {this.state.errors.passWordConFirm}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-12">
                  <button className="btn btn-lg btn-dark w-100">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default UserProfile;
