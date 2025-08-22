import React from "react";
import Card from "../components/Card";
import { useState } from "react";
import ConfirmActionDialog from "./ConfirmActionDialog";
import { deleteLostTicket } from "../api/Api";
import '../styles/lists.css';

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
    <section>
      <div className="lnf-list-container">
        {lostItems.map((item) => (
          <div className="lnf-list-card" key={item._id}>
            <div className="lnf-list-title">Ticket #{item._id}</div>
            <div>
              <div className="lnf-list-label">Description</div>
              <div className="lnf-list-value">{item.description}</div>
            </div>
            <div>
              <div className="lnf-list-label">Location</div>
              <div className="lnf-list-value">{item.location}</div>
            </div>
            <div className={`lnf-list-status ${item.status}`}>{item.status}</div>

            {item.status === "pending" && (
              <div className="lnf-list-actions">
                <button className="lnf-list-button edit" onClick={() => handleEditTicket(item._id)}>Edit</button>
                <button className="lnf-list-button approve" onClick={() => handleConfirmAction("approve", item._id)}>
                  Approve
                </button>
                <button className="lnf-list-button delete" onClick={() => handleConfirmAction("delete", item._id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
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
    </section>
  );
};
export default LostItemsList;
