import React from "react";

//Creating components as functions
const currentTime = new Date();
const hour = currentTime.getHours();
var time;
const customStyle = {
  color: "black"
};

if (hour > 0 && hour <= 11) {
  time = "Good Morning";
  customStyle.color = "green";
} else if (hour > 11 && hour <= 17) {
  time = "Good Afternoon";
  customStyle.color = "red";
} else if (hour > 17 && hour <= 21) {
  time = "Good Evening";
  customStyle.color = "blue";
} else {
  time = "Good Night";
  customStyle.color = "yellow";
}

function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {time}
    </h1>
  );
}

export default Heading;
