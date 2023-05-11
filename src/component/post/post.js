import React from "react";
import classes from "./post.module.css";
import Profile from "../assets/Proifle.png";
import Tick from "../assets/EXPERT_ICON.png";


export default function Post() {
  return (
    <div className={classes.ParentDiv}>
      <div className={classes.FirstDiv}>
        <div className={classes.ImgDiv}>
          <img className={classes.img} src={Profile} alt="/profile" />
        </div>
        <div>
          <div className={classes.InsideDiv}>
            <div className={classes.text}>안녕 나 응애</div>
            <div>
              <img className={classes.Tick} src={Tick} alt="/check" />
            </div>
            <div className={classes.text2}> 1일전</div>
          </div>
          <div >
            <span className={classes.text2}>165cm </span>
            <span className={classes.text2}>53kg</span>
          </div>
        </div>
      </div>
      <div className={classes.SecondDiv}>
        <div className={classes.BtnDiv}>
          <button className={classes.btn}>팔로우</button>
        </div>
      </div>

    </div>
  );
}
