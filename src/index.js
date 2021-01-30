import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

/*--------------------------------React Components----------------------------------
They use PascalCase for filenames because a React component is nothing but a class.
*/

ReactDOM.render(<App></App>, document.getElementById("root"));

/*---------------------------Challenge (Style according to time)--------------------------
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

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {time}
  </h1>,
  document.getElementById("root")
);
*/

/*-------------------------Inline styling for React elements-----------------------------
 
*In JSX inline styling is different, we cannot directly put it as 
 <h1 style="color:red">Hello World</h1>
 instead style property will need javascript object as the value.
 Eg. {
      color:"red"
     }
 We need to pass it inside {} as it is js inside html text.
 
*Although inline property is used rarely but it is used to change the style property on the fly.


const customStyle = {
  color: "Green",
  fontSize: "20px"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <p style={customStyle}> Neque convallis a cras semper auctor neque.</p>
  </div>,
  document.getElementById("root")
);
*/

/*-----------------Javascipt properties as attributes in JSX and styling-----------------------

* Attributes name should be written in camelCase only as javascript not like in HTMl.
eg. contenteditable --> contentEditable

* Selfclosing tag must have an end tag in JSX unlike in HTML
eg. <img />

* CSS properties can be applied in JSX same as HTML but with some rules.

const image = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Momos</li>
      <li>Chicken</li>
      <li>Pizza</li>
    </ul>
    <div className="size">
      <img
        alt="images"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtUaoZrna8K7umWmYZVqUnnEhxktJl97CNw&usqp=CAU"
      ></img>
      <img
        alt="images"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByKfcEKCni41Me5skxEPt2hrRsC2449nvKA&usqp=CAU"
      ></img>
      <img
        alt="images"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sT26_BWoXpD4eYMA0PjxLTb5bOhCkyt1Gw&usqp=CAU"
      ></img>
    </div>
    <img alt="images" src={image + "?grayscale"}></img>
  </div>,
  document.getElementById("root")
);
*/

/*-------------------------------JSX--------------------------------------
const fname = "Saloni";
const lname = "Subedi";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <h2>Hi {fname + " " + lname}.</h2>
    <p>Your lucky number is {Math.floor(Math.random()*10)+1}.</p>
    <p>Copyright &copy; {year}.</p>
  </div>,
  document.getElementById("root")
);*/
