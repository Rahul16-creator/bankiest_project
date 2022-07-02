import React from "react";
import { connect } from "react-redux";
import "./modal.css";
import * as actions from "../../actions"

const Modal = (props) => {
  return (
    <React.Fragment>
      <div onClick={props.hideModal} className="overlay"></div>
      <div className="modal">
        <div className="modal_close" onClick={props.hideModal}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <h1>
          Open your bank account in just{" "}
          <span className="highlight"> 5 minutes </span>
        </h1>
        <div className="form">
          <div className="form_row">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="form_row">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="form_row">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <button>Next step </button>
        </div>
      </div>
    </React.Fragment>
  );
};



export default connect(null,actions)(Modal);
