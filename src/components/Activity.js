import React from "react";
import PropTypes from "prop-types";
import WorkImg from "../images/icon-work.svg";
import PlayImg from "../images/icon-play.svg";
import StudyImg from "../images/icon-study.svg";
import ExerciseImg from "../images/icon-exercise.svg";
import SocialImg from "../images/icon-social.svg";
import SelfCareImg from "../images/icon-self-care.svg";

function Activity(props) {
  const { title, current, past } = props;

  const bgData = {
    Work: {
      color: " bg-fem-100 ",
      img: WorkImg,
    },
    Play: {
      color: " bg-fem-200 ",
      img: PlayImg,
    },
    Study: {
      color: " bg-fem-300 ",
      img: StudyImg,
    },
    Exercise: {
      color: " bg-fem-400 ",
      img: ExerciseImg,
    },
    Social: {
      color: " bg-fem-500 ",
      img: SocialImg,
    },
    "Self Care": {
      color: " bg-fem-600 ",
      img: SelfCareImg,
    },
  };

  console.log(bgData[title]);

  return (
    <div className="relative">
      <div
        className={"w-52 h-52 rounded-t-lg rounded-b-xl" + bgData[title].color}
      >
        <img src={bgData[title].img} alt="" className="ml-auto mr-3" />
      </div>
      <div className="absolute bottom-0 bg-fem-800 w-52 h-40 z-50 rounded-lg p-4 flex flex-col gap-2 cursor-pointer hover:bg-fem-575 duration-300">
        <div className="flex justify-between">
          <h2 className="font-medium">{title}</h2>
          <button className="hover:text-white text-fem-950 duration-400">
            <i className="fa-solid fa-ellipsis text-2xl"></i>
          </button>
        </div>
        <h3 className="font-light text-5xl">{current + "hrs"}</h3>
        <h4 className="text-xs text-fem-950">
          {"Last Week - " + past + "hrs"}
        </h4>
      </div>
    </div>
  );
}

Activity.propTypes = {
  title: PropTypes.string,
  current: PropTypes.number,
  past: PropTypes.number,
};

Activity.defaultProps = {
  title: "Work",
  current: 32,
  past: 36,
};

export default Activity;
