import React, { useState, useEffect } from "react";
import LinkButton from "../components/linkButton";
import LostItemsList from "../components/LostItemsList";

const LostItemsRequests = () => {
  console.log("LostItemsRequests component mounted");
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("http://localhost:5000/lnf/getApprovedTickets"); //send all these to api folder
        console.log("res:", res);
        const data = await res.json();
        console.log("Fetched tickets:", data);
        setTickets(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchTickets();
  }, []);
  const updateTicketStatus = (id, newStatus) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket._id === id ? { ...ticket, status: newStatus } : ticket
      )
    );
  };
  const [showPending, setPending] = useState(-1);

  // const handleTogglePending = (count) => {
  //   setPending(count);
  //   console.log(count);
  // };

  useEffect(() => {
    const checkPending = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/lnf/countPendingTickets"
        );
        const data = await res.json();
        console.log("Pending tickets count:", data.count);
        if (data.count > 0) {
          setPending(data.count);
          console.log("Pending Count", showPending);
        }
      } catch (err) {
        console.error("Error in counting pending tickets:", err);
      }
    };
    checkPending();
  });
  return (
    <div>
      <>
        <div className="flex justify-center mt-4">
          <LinkButton linkto="/" value="Home Page" />
          <LinkButton linkto="/pending-tickets" value="View Pending Tickets" />
        </div>
      </>
      <>
        <h2 className="lnf-inventory-heading">Lost Items Tickets</h2>
        {showPending > 0 ? (
          <p>{showPending} Pending tickets available to approve</p>
        ) : (
          <p>No pending tickets</p>
        )}
        <LostItemsList lostItems={tickets} onUpdate={updateTicketStatus} />
      </>
    </div>
  );
};

export default LostItemsRequests;
