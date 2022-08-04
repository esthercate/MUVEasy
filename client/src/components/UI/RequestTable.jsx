import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

const RequestTable = () => {
  const [myRequests, setMyRequests] = useState([]);

    const [markDone, setMarkDone] = useState(false);
    
     useEffect(() => {
       // fetch user profiles
       fetch("/requests")
         .then((res) => res.json())
         .then((req) => setMyRequests(req));
     }, []);

  function handleMarked() {
    setMarkDone(true);
  }

  return (
    <div>
      <div className="subtitle mb-4">
        <h6>Manage your requests for transport services</h6>
      </div>

      <div className="dashboard-table">
        <Table hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Moving Date</th>
              <th>Moving From</th>
              <th>Moving To</th>
              <th>Additional Info</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {myRequests.map((request) => (
              <tr key={myRequests.id}>
                <td>1</td>
                <td>{request.moving_date}</td>
                <td>{request.moving_from}</td>
                <td>{request.moving_to}</td>
                <td>{request.additional_info}</td>
                <td onClick={handleMarked}>
                  {!markDone ? (
                    <i class="ri-close-line"></i>
                  ) : (
                    <i class="ri-check-double-line"></i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RequestTable;
