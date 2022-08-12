import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../images/image-jeremy.png";
import TimePeriodButton from "./ui/TimePeriodButton";

function Profile(props: any) {
  return (
    <div className="row-span-2 rounded-xl bg-fem-800 w-52 min-h-full">
      <div className="bg-fem-550 p-4 rounded-xl h-72 flex flex-col justify-start gap-12">
        <img
          src={Avatar}
          alt=""
          className="rounded-full w-16 border-solid border-[3px] border-white"
        />
        <div className="">
          <div className="text-fem-950">Report for</div>
          <div className="text-4xl ">Jeremy</div>
          <div className="text-4xl -translate-y-4">Robson</div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 pl-4 py-4 text-base mt-1">
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
};

Profile.defaultProps = {
  active: "Daily",
};

export default Profile;
