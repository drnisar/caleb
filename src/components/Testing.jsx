import React from "react";

const Testing = () => {
  function Car(props) {
    return <p>The color of the car is {props.color}</p>;
  }
  return <div>I am a {Car.props}</div>;
};

export default Testing;
