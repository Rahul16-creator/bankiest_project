import React, { useState } from "react";
import navStyle from "./navigation.module.css";
import * as actions from "../../actions";
import { connect } from "react-redux";

const navigation = (props) => {

  const [show,setShow]=useState(false);

  return (
    <>

      <div className={`${navStyle.menu_icon} ${show?navStyle.menu_icon_active:""}`} onClick={()=>setShow(pre=>!pre)}>
       {!show ?<ion-icon name="menu-outline"></ion-icon>:
        <ion-icon name="close-outline"></ion-icon> }
      </div>


      <div className={`${navStyle.menu} ${show ?navStyle.active:navStyle.inactive}`}>
        <ul className={navStyle.nav} onClick={()=>setShow(false)}>
          <li className={navStyle.list}>
            <a href="/#">features</a>
          </li>
          <li className={navStyle.list}>
            <a href="/#">operations</a>
          </li>
          <li className={navStyle.list}>
            <a href="/#">testimonials</a>
          </li>
          <li className={navStyle.list}>
            <button
              onClick={props.hideModal}
              className={`btn ${navStyle.openacc}`}
            >
              Open account
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default connect(null, actions)(navigation);
