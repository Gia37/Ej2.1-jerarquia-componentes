import React from "react";

export default function Icon(props) {
  return (
    <div className="icon">
      <img src={props.icon} alt="icon" />
      <p>{props.title}</p>
    </div>
  );
}
