import React from "react";
export default function login(props) {
  return (
    <div className="login">
      <h1>{props.isRegister ? "Register" : "Login"}</h1>
      <button>Username</button>
      <button>Password</button>
      {props.isRegister === true ? <button>Confirm Password</button> : null}
      <button>{props.isRegister === true ? "Register" : "Login"}</button>
    </div>
  );
}
