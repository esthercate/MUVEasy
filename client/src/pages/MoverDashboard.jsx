import React from "react";
import { Container } from "reactstrap";
import Dashboard from "../components/UI/Dashboard";

const MoverDashboard = ({ user, setUser }) => {

  return (
    <>
      <Container>
        <Dashboard user={user} setUser={setUser} />
      </Container>
    </>
  );
};

export default MoverDashboard;
