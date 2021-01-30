import React from "react";
import ReactDOM from "react-dom";

/*Javascipt properties as attributes in JSX and styling

Attributes name should be written in camelCase only as javascript not like in HTMl.

eg. contenteditable --> contentEditable*/
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

/*--------------------JSX-------------------------- 
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
