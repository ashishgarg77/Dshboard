import React from "react";

import RecentActivities from "../components/Activities/RecentActivities";
import UpcomingPayments from "../components/Activities/UpcomingPayments";
import LoadsPerLoan from "../components/Activities/LoadsPerLoan";

const Activities = () => {
  return (
      <div className="row my-2 ">
        <RecentActivities />
        <UpcomingPayments />
        <LoadsPerLoan />
      </div>
  );
};

export default Activities;
