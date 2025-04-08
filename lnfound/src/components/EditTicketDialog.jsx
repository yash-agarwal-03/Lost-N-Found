import React from 'react';

const EditTicketDialog = ({ isOpen, onClose, ticket, onUpdateTicket, setEditingTicket }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog">
      <div className="dialog-content">
        <h3>Edit Ticket</h3>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={ticket.description}
            onChange={(e) => setEditingTicket({ ...ticket, description: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            value={ticket.location}
            onChange={(e) => setEditingTicket({ ...ticket, location: e.target.value })}
          />
        </div>
        <div>
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button onClick={onUpdateTicket}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTicketDialog;