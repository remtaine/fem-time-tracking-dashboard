import React from "react";
import PropTypes from "prop-types";
import Avatar from "../images/image-jeremy.png";

function Profile(props: any) {
  return (
    <div className="row-span-2 rounded-xl bg-fem-800 w-40 h-80">
      <div className="bg-fem-900 p-4 rounded-xl h-52 flex flex-col justify-around">
        <img
          src={Avatar}
          alt=""
          className="rounded-full w-12 border-solid border-4 border-white"
        />
        <div className="">
          <div className="text-fem-950">Report for</div>
          <div className="text-2xl ">Jeremy</div>
          <div className="text-2xl ">Robson</div>
        </div>
      </div>
      <ul className="flex flex-col gap-1 pl-4 py-4 text-sm">
        <li className="text-fem-900 hover:text-neutral-50 duration-400">
          <button className="">Daily</button>
        </li>
        <li className="text-fem-900 hover:text-neutral-50 duration-400">
          <button className="">Weekly</button>
        </li>
        <li className="text-fem-900 hover:text-neutral-50 duration-400">
          <button className="">Monthly</button>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
