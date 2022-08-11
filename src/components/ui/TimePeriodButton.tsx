import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TimePeriodButton(props: any) {
  const { text } = props;
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = function () {
    setIsActive(true);
  };
  return (
    <button
      className={
        "hover:text-neutral-50 duration-400 text-lg" +
        " " +
        (isActive ? "text-neutral-50" : "text-fem-900")
      }
      onClick={toggleIsActive}
    >
      {text}
    </button>
  );
}

TimePeriodButton.propTypes = {
  text: PropTypes.string,
};

export default TimePeriodButton;
