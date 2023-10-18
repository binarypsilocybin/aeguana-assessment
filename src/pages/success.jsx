import React from "react";
import { useState } from "react";
import Header from "../header";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Success = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <main>
      <Header />
      <div className="wrapper-success">
        <h1>Success</h1>
        <p>We would love your feedback</p>
        <div className="success__stars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={54}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
              />
            );
          })}
        </div>
        <p>Please collect your purchase</p>
      </div>
    </main>
  );
};

export default Success;
