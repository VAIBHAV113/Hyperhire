import React from "react";
import "./image.css";
import Heart from "../assets/heart.png";
import Comment from "../assets/comment.png";
import Book from "../assets/bookmark.png";
import Dots from "../assets/dots.png";
export default function Image() {
  return (
    <div>
      <div className="imgDiv">
        <img
          className="img"
          src="https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg"
          alt="/fetched"
        />
      </div>
      <div className="ParentDiv">
        <div className="IconDiv">
          <img className="icons" src={Heart} alt="icons" />
          <span className="color">5</span>
        </div>
        <div className="IconDiv">
          <img className="icons" src={Comment} alt="icons" />
          <span className="color">5</span>
        </div>
        <div className="IconDiv2">
          <img className="icons" src={Book} alt="icons" />
        </div>
        <div className="IconDiv">
          <img className="icons" src={Dots} alt="icons" />
        </div>
      </div>
      <hr className="hr"></hr>
    </div>
  );
}
