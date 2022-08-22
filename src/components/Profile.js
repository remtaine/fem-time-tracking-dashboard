import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Avatar from "../images/image-jeremy.png";
import TimePeriodButton from "./ui/TimePeriodButton";
import { UserContext } from "../App";

function Profile(props) {
  // const { onClickFx } = props;
  // const value = useContext(UserContext);

  return (
    <div className="row-span-2 rounded-xl bg-fem-800 w-[350px] xl:w-52 min-h-full">
      <div className="bg-fem-550 p-4 rounded-xl xl:h-72 flex  flex-row xl:flex-col items-center xl:items-start justify-start gap-6 xl:gap-12">
        <img
          src={Avatar}
          alt=""
          className="rounded-full w-16 h-16 border-solid border-[3px] border-white"
        />
        <div className="flex flex-col gap-2">
          <div className="text-fem-950">Report for</div>
          <div className="text-xl xl:text-4xl leading-none">Jeremy Robson</div>
        </div>
      </div>
      <ul className="flex flex-row justify-evenly xl:flex-col gap-2 xl:pl-4 py-4 text-base mt-1">
        <li className="">
          <TimePeriodButton text="Daily" />
        </li>
        <li className="">
          <TimePeriodButton text="Weekly" />
        </li>
        <li className="">
          <TimePeriodButton text="Monthly" />
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  active: PropTypes.string,
  onClickFx: PropTypes.func,
};

Profile.defaultProps = {
  active: "Daily",
};

export default Profile;
