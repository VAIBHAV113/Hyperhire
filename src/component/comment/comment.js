import React from "react";
import classes from "./comment.module.css";
import Mode from "../assets/imagesmode.png";

export default function comment() {
  return (
    <div>
      <hr></hr>
      <div className={classes.mainDiv}>
        <div className={classes.flexDiv}>
          <div className={classes.insideDiv}>
            <img className={classes.img} src={Mode} alt="icon" />
            <div className={classes.text}>댓글을 남겨주세요.</div>
          </div>
          <div className={classes.text}>등록</div>
        </div>
      </div>
    </div>
  );
}
