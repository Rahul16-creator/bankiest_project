import React, { useState } from "react";
import "./operation.css";
import tab_data from "../services/tab_data.json";

const Operations = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    let data = tab_data.data[activeTab];
    return (
      <React.Fragment>
        <div className={`tab_icon tab_icon_${activeTab}`}>
          <ion-icon name={`${data.icon_name}`}></ion-icon>{" "}
        </div>
        <h1>{data.heading}</h1>
        <p>{data.para}</p>
      </React.Fragment>
    );
  };


  const tabSwitch=(e)=>{
    let tab=e?.target?.dataset?.tab;
    if(tab) {
        setActiveTab(tab)
    }
  }

  return (
    <div className="section section_operations">
      <div className="operation_heading">
        <p>OPERATIONS</p>
        <h1>Everything as simple as possible, but no simpler.</h1>
      </div>
      <div className="operations">
        <div className="operation_tabs" onClick={tabSwitch}>
          <span className={`tab tab_secondary ${activeTab==="0"?'active':""}`} data-tab="0">
            <label>01</label>
            Instant transfers
          </span>
          <span  className={`tab tab_primary ${activeTab==='1'?'active':""}`} data-tab="1">
            <label>02</label>
            Instant loans
          </span>
          <span  className={`tab tab_tertiary ${activeTab==='2'?'active':""}`} data-tab="2">
            <label>03</label>
            Instant closing
          </span>
        </div>
        <div className="operation_tab_content">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Operations;
