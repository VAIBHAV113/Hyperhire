import React from "react";
import classes from "./reply.module.css";
import Profile from "../assets/Proifle.png";
import Tick from "../assets/EXPERT_ICON.png";
import Dots from "../assets/dots.png";
import Heart from "../assets/heart.png";
import Comment from "../assets/comment.png";
import Pink from "../assets/pink.png";

export default function Reply() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.ParentDiv}>
        <div className={classes.FirstDiv}>
          <div className={classes.ImgDiv}>
            <img className={classes.img} src={Profile} alt="/profile" />
          </div>
          <div>
            <div className={classes.InsideDiv}>
              <div className={classes.text}>안녕 나 응애 </div>
              <div>
                <img className={classes.Tick} src={Tick} alt="/check" />
              </div>
              <div className={classes.text2}> 1일전</div>
            </div>
          </div>
        </div>
        <div className={classes.img1}>
          <img src={Dots} alt="icon" />
        </div>
      </div>
      <div className={classes.comm}>
        <div className={classes.tt}>
          어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
          아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
          기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
          올라온다고 하니 꼭 봐주세용~!
        </div>
      </div>
      <div className={classes.ParentDiv2}>
        <div className="IconDiv">
          <img className="icons" src={Heart} alt="icons" />
          <span className="color">5</span>
        </div>
        <div className="IconDiv">
          <img className="icons" src={Comment} alt="icons" />
          <span className="color">5</span>
        </div>
      </div>
      <div className={classes.ParentDiv3}>
        <div className={classes.FirstDiv}>
          <div className={classes.ImgDiv}>
            <img className={classes.img} src={Pink} alt="/profile" />
          </div>
          <div>
            <div className={classes.InsideDiv}>
              <div className={classes.text}> ㅇㅅㅇ</div>
              <div className={classes.text2}> 1일전</div>
            </div>
          </div>
        </div>
        <div className={classes.img1}>
          <img src={Dots} alt="icon" />
        </div>
      </div>
      <div className={classes.com}>
        <div className={classes.tt}>
          오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
        </div>
      </div>
      <div className={classes.ParentDiv4}>
      <div className="IconDiv">
        <img className="icons" src={Heart} alt="icons" />
        <span className="color">5</span>
      </div>
      </div>
    </div>
  );
}
