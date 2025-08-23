import React from "react";
import Card from "../components/Card";
import { useState } from "react";
import ConfirmActionDialog from "./ConfirmActionDialog";
import { deleteLostTicket } from "../api/Api";
import "../index.css";
const LostItemsList = ({ lostItems, onUpdate }) => {
  const [isConfirmDialogOpen, setConfirmDialogBoxOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmTicketId, setConfirmTicketId] = useState(null);

  const updateTicket = async () => {
    if (confirmAction === "approve") approveTicket();
    else deleteLostTicket(confirmTicketId);

    setConfirmDialogBoxOpen(false);
    setConfirmAction(null);
    setConfirmTicketId(null);
  };

  const approveTicket = async () => {
    const id = confirmTicketId;
    const newStatus = "approved";

    try {
      const res = await fetch(`http://localhost:5000/lnf/approve/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = res.json();
      console.log("Action response:", data);
      onUpdate(id, newStatus);
    } catch (err) {
      console.error(`Error in ${confirmAction}ing:`, err);
    }

    
  };

  const handleConfirmAction = async (action, id) => {
    setConfirmTicketId(id);
    setConfirmDialogBoxOpen(true);
    setConfirmAction(action);
  };

  const handleEditTicket = (id) => {};

  return (
    <>
      <>
        <div className="lnf-inventory-grid">
        {lostItems.map((item) => (
          <div className="lnf-inventory-card">
            <h3 className="lnf-inventory-card-id">Ticket #{item._id}</h3>
            <p className="lnf-inventory-card-label">
              Description:
            </p>
            <div className="lnf-inventory-card-value">{item.description}</div>
            <p className="lnf-inventory-card-label">
              Location:
            </p>
            <div className="lnf-inventory-card-value">{item.location}</div> 
            <p className="lnf-inventory-card-label">
              Status:
            </p>
            <div className="lnf-inventory-card-value">{item.status}</div> 

            {item.status === "pending" && (
              <>
                <button onClick={() => handleEditTicket(item._id)}>Edit</button>
                <button
                  onClick={() => handleConfirmAction("approve", item._id)}
                >
                  Approve
                </button>
                <button onClick={() => handleConfirmAction("delete", item._id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      </>
      <ConfirmActionDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => {
          setConfirmDialogBoxOpen(false);
          setConfirmAction(null);
          setConfirmTicketId(null);
        }}
        action={confirmAction}
        onConfirm={updateTicket}
      />
    </>
  );
};
export default LostItemsList;
