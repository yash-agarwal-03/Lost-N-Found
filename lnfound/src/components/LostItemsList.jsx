import React from "react";
import Card from "../components/Card";
import { useState } from "react";
import ConfirmActionDialog from "./ConfirmActionDialog";

const LostItemsList = ({lostItems, onUpdate}  ) => {
  const [isConfirmDialogOpen, setConfirmDialogBoxOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmTicketId, setConfirmTicketId] = useState(null);

  const updateTicket = async () => {
    const id = confirmTicketId;
    const newStatus = confirmAction === "approve" ? "approved" : "rejected";

    try {
      const res = await fetch(`http://localhost:5000/lnf/update/${id}`, {
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
    setConfirmDialogBoxOpen(false);
    setConfirmAction(null);
    setConfirmTicketId(null);
  };

  const handleConfirmAction = async (action, id) => {
    setConfirmTicketId(id);
    setConfirmDialogBoxOpen(true);
    setConfirmAction(action);
  };

  const handleEditTicket = (id) => {};

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lostItems.map((item) => (
          <Card className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Ticket #{item._id}</h3>
            <p className="text-gray-700 mb-2">
              Description: {item.description}
            </p>
            <p className="text-gray-700 mb-2">Location: {item.location}</p>
            <p className="text-gray-700 mb-2">Status: {item.status}</p>

            {item.status === "pending" && (
              <>
                <button onClick={() => handleEditTicket(item._id)}>Edit</button>
                <button
                  onClick={() => handleConfirmAction("approve", item._id)}
                >
                  Approve
                </button>
                <button onClick={() => handleConfirmAction("reject", item._id)}>
                  Reject
                </button>
              </>
            )}
          </Card>
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
