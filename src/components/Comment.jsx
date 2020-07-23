import React, { Component } from "react";
import { connect } from "react-redux";
import user from "../assets/images/default-user.png";
const mapStateToProps = (state) => {
  return { comments: state.comments };
};

function getTimeStamp(timeStamp) {
  let newTimeStamp = Number.parseInt(timeStamp);
  let timeInMilliSec = Date.now() - newTimeStamp;
  let seconds = Math.floor(timeInMilliSec / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let hh = "",
    mm = "",
    ss = "";
  if (hours !== 0) {
    hh = `${hours % 24} hrs `;
  } else {
    hh = " ";
  }
  if (minutes !== 0) {
    mm = `${minutes % 60} min `;
  } else {
    if (seconds === 0) {
      ss = "Just now";
    } else if (seconds) {
      ss = `${seconds} sec`;
    }
  }
  newTimeStamp = hh + mm + ss;
  return newTimeStamp;
}

const commentList = ({ comments }) => {
  return (
    <ul className="list-group list-group-flush top ">
      {comments.map((el) => (
        <li className="list-group-item" key={el.id}>
          <img src={user} className="image-width" />
          {el.body}
          <br></br>
          <div>{getTimeStamp(el.initialComment)}</div>
        </li>
      ))}
    </ul>
  );
};

const List = connect(mapStateToProps)(commentList);
export default List;
