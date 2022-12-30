import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {

  const total = useSelector((state) => state.todoReducer.list); //total todo count
  const incomplete = total.filter(item => item.completed === false); //incomplete todo count
  const complete = total.filter(item => item.completed === true); //complete todo count
  const [realTime, setrealTime] = useState("");
  const date = new Date().toDateString();
  //real Time clock
  setInterval(function () {
    const time = new Date().toLocaleTimeString();
    setrealTime(time);
  }, 500);

  return (
    <div className="top-part">
      <div className="saturday">
        <h5 className="setdate">{date}</h5>
        <h6 className="settime">{realTime}</h6>
        <p>
          <span className="numtask">{incomplete.length}</span> Active Tasks
        </p>
      </div>
      <div className="tasks">
        <h6>Total Tasks</h6>
        <p><b>{total.length}</b></p>
      </div>
      <div className="tasks">
        <h6>Incomplete Tasks</h6>
        <p><b>{incomplete.length}</b></p>
      </div>
      <div className="tasks">
        <h6>Complete Tasks</h6>
        <p><b>{complete.length}</b></p>
      </div>
    </div>
  );
}
