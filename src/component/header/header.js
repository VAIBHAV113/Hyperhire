import React from "react";
import clas from "./header.module.css";
import LeftArrow from "../assets/ARROW.png";
import Ring from "../assets/off.png";

export default function header() {
  return (
    <div className={clas.ParentDiv}>
      <div className={clas.imageDiv}>
        <img className={clas.img} src={LeftArrow} alt="/left" />
      </div>
      <div className={clas.text}>자유톡</div>
      <div>
        <img className={clas.imageDiv} src={Ring} alt="/bell" />
      </div>
    </div>
  );
}
