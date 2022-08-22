import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../App";

function TimePeriodButton(props) {
  const { text } = props;
  const { timePeriod, setTimePeriod } = useContext(Context);

  // console.log(user);
  return (
    <button
      className={
        "hover:text-neutral-50 duration-400 text-lg" +
        " " +
        (timePeriod === text ? "text-neutral-50" : "text-fem-900")
      }
      onClick={() => {
        setTimePeriod(text);
      }}
    >
      {text}
    </button>
  );
}

TimePeriodButton.propTypes = {
  text: PropTypes.string,
  onClickFx: PropTypes.func,
};

export default TimePeriodButton;
