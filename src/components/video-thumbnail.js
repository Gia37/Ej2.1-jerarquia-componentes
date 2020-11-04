import React from "react";
import Imagen from "../images/img1.webp";

export default function VideoThumbnail(props) {
  return (
    <div className="thumbnail">
      <img src={Imagen} alt="thumbnail" />
    </div>
  );
}
