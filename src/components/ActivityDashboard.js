import React, { useContext } from "react";
import Activity from "./Activity";
import PropTypes from "prop-types";
import { Context } from "../App";

function ActivityDashboard(prop) {
  const { timePeriod, setTimePeriod } = useContext(Context);
  const data = require("../data/data.json");

  console.log(timePeriod);
  console.log(data);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      {data.map(
        (
          datum,
          // : {
          //   title: string,
          //   timeframes: {
          //     daily: { current: number, previous: number },
          //     weekly: { current: number, previous: number },
          //     monthly: { current: number, previous: number },
          //   },
          // }
          index
          // : number
        ) => {
          return (
            <Activity
              title={datum["title"]}
              current={datum["timeframes"][timePeriod.toLowerCase()].current}
              past={datum["timeframes"][timePeriod.toLowerCase()].previous}
              // past={datum["timeframes"]}
              key={index}
            />
          );
        }
      )}
    </div>
  );
}

ActivityDashboard.propTypes = {
  timePeriod: PropTypes.string,
};

ActivityDashboard.defaultProps = {
  timePeriod: "weekly",
};

export default ActivityDashboard;
