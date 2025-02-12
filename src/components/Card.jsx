import React from "react";

const Card = (props) => {
  return (
    <div>
      <img
        className="img1"
        style={{
          left: `${props.x}%`,
          top: `${props.y}%`,
          rotate: `${props.rotate}deg`,
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6N3WMQ8njBL_yF OWYnsTDevv3cgExBv0RQ&s"
        alt=""
      />
    </div>
  );
};

export default Card;
