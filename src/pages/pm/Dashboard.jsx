import React from "react";
import {
  Layout,
  AnalyticsCard,
  ResponseTable,
} from "../../components/index.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // Use analytics data or fallback to default values

  const responces = [
    {
      slno: 1,
      empId: "E101",
      empName: "Alice Johnson",
      totalScore: 84,
      submitTime: "2023-10-01T10:00:00Z",
    },
    {
      slno: 2,
      empId: "E102",
      empName: "Bob Smith",
      totalScore: 75,
      submitTime: "2023-10-02T11:00:00Z",
    },
    {
      slno: 3,
      empId: "E103",
      empName: "Charlie Brown",
      totalScore: 92,
      submitTime: "2023-10-03T12:00:00Z",
    },
    {
      slno: 1,
      empId: "E101",
      empName: "Alice Johnson",
      totalScore: 84,
      submitTime: "2023-10-01T10:00:00Z",
    },
    {
      slno: 2,
      empId: "E102",
      empName: "Bob Smith",
      totalScore: 75,
      submitTime: "2023-10-02T11:00:00Z",
    },
    {
      slno: 3,
      empId: "E103",
      empName: "Charlie Brown",
      totalScore: 92,
      submitTime: "2023-10-03T12:00:00Z",
    },
  ];

  const analytics = {
    tasksByStatus: {
      total: 5,
      completed: 1,
      overdue: 5,
    },
  };

  return (
    <Layout>
      {/* Stat Cards using the AnalyticsCard component */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
        <AnalyticsCard
          value={analytics.tasksByStatus?.total}
          label="Total Expected Responces"
        />

        <AnalyticsCard
          value={analytics.tasksByStatus?.completed}
          label="Completed Responces"
        />

        <AnalyticsCard
          value={analytics.tasksByStatus?.overdue}
          label="Overdue"
          isNegative={true} // This will make the text red
        />
      </div>

      {/* Task Table with Filter Integration */}
      <ResponseTable
        onClick={(responceId) => navigate(`/review/${responceId.empId}`)}
        responces={responces}
      />
    </Layout>
  );
};

export default Dashboard;
