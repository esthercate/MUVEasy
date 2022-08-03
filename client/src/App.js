import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(null)

  useEffect(() => {
    // fetch user profiles
    fetch("/profiles")
      .then((res) => res.json())
      .then(setProfiles);
  }, []);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);

  


  return <Layout profiles={profiles} user={user} setUser={setUser} />;
}

export default App;
