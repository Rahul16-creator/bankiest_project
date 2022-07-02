import React from 'react';
import navStyle from "./navigation.module.css";
import * as actions from "../../actions"
import { connect } from 'react-redux';

const navigation = (props) => {
  return (
    <>
    <ul className={navStyle.nav}>
        <li className={navStyle.list}><a href="/#">features</a></li>
        <li className={navStyle.list}><a href="/#">operations</a></li>
        <li className={navStyle.list}><a href="/#">testimonials</a></li>
        <li className={navStyle.list}><button onClick={props.hideModal} className={`btn ${navStyle.openacc}`} >Open account</button></li>
    </ul>
    </>
  )
}


export default connect(null,actions)(navigation);