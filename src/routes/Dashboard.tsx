import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import ApplicationCard from "../components/ApplicationCard";

function Dashboard() {
  const [applications, setApplications] = useState<any[]>([]);

  async function getApplications() {
    const data = await fetch(`http://localhost:8080/applications`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await data.json();
    setApplications(jsonData);
  }

  useEffect(() => {
    getApplications();
  }, [])

  return (
    <div className="box">
      {applications.map((application: any) => (
        <ApplicationCard application={application}/>
      ))}
    </div>
  );
}

export default Dashboard;
