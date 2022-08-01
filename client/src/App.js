import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("/profiles")
      .then((res) => res.json())
      .then((contestsData) => setProfiles(contestsData));
  }, []);

  return <Layout profiles={profiles} />;
}

export default App;
