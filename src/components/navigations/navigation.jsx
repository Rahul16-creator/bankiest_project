import React from 'react';
import navStyle from "./navigation.module.css";

const navigation = () => {
  return (
    <>
    <ul className={navStyle.nav}>
        <li className={navStyle.list}><a href="/#">features</a></li>
        <li className={navStyle.list}><a href="/#">operations</a></li>
        <li className={navStyle.list}><a href="/#">testimonials</a></li>
        <li className={navStyle.list}><button className={`btn ${navStyle.openacc}`} >Open account</button></li>
    </ul>
    </>
  )
}

export default navigation;