import React from "react";
import cardImage from "../Images/cardImage.png";
import { Link } from "react-router-dom";
import Typography from "./Typography";
const ProgCard = (props) => {
  return (
    //pakai map nanti buat looping card
    <Link to="/detail" className="cardLink">
      <div className="cardContainer">
        <div className="upperCard">
          <img src={cardImage} className="cardPic" />
          <div className="upperRightCard">
            <Typography sizes={0.8} colors={"#FFCD29"}>
              Intensive Bootcamp
            </Typography>
            <Typography sizes={1}>{props.title}</Typography>
            <Typography sizes={0.6} colors={"lightgrey"}>
              {props.detail}
            </Typography>
          </div>
        </div>

        <div className="bottomCard">
          <Typography sizes={1} bolds={700}>
            {props.title}
          </Typography>
          <Typography sizes={1} bolds={700}>
            {props.detail}
          </Typography>
          <Typography sizes={0.75}>
            Batch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.batch}
          </Typography>
          <Typography sizes={0.75}>Mentor &nbsp;{props.mentor}</Typography>
          <div className="priceDiv">
            <Typography sizes={1}>{props.oldPrice}</Typography>
            <Typography sizes={1} colors={"#0ACF83"}>{props.newPrice}</Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProgCard;
