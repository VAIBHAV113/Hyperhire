import React from "react";
import classes from "./tex.module.css";

const Data = [
  {
    id: 1,
    title: "#2023",
  },
  {
    id: 2,
    title: "#TODAYISMONDAY",
  },
  {
    id: 3,
    title: "#TOP",
  },
  {
    id: 4,
    title: "#POPS!",
  },
  {
    id: 5,
    title: "#WOW",
  },
  {
    id: 6,
    title: "#ROW",
  },
];

export default function Text() {
  return (
    <div className={classes.Parent}>
      <div className={classes.text}>
        지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
      </div>
      <div className={classes.text2}>
        지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
        어떤 상품이 제일 괜찮았어?
      </div>

      <div className={classes.text2}>
        후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일
        재밌었다던데 맞아???
      </div>

      <div className={classes.text2}>
        올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌
        사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들
        있으면 어땠는지 후기 좀 공유해주라~~!
      </div>
      <div className={classes.MapMainDiv}>
        {Data &&
          Data.map((items, index) => {
            return (
              <div className={classes.Direction} key={index}>
                <div className={classes.mapText}>{items.title}</div>
              </div>
            );
          })}
      </div>
      
    </div>
  );
}
