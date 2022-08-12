import React from "react";
import Activity from "./Activity";
import PropTypes from "prop-types";

function ActivityDashboard(prop) {
  const { timePeriod } = prop;
  const data = require("../data/data.json");

  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4">
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
              current={datum["timeframes"][timePeriod].current}
              past={datum["timeframes"][timePeriod].previous}
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
