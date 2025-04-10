import React, { useState } from 'react';

const TicketForm = ({ onAddTicket }) => {
  const [newTicket, setNewTicket] = useState({ description: '', location: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTicket(newTicket);
    setNewTicket({ description: '', location: '' });
  };

  return (
    <div className="card">
      <h2>File your complaint</h2>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={newTicket.description}
          onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={newTicket.location}
          onChange={(e) => setNewTicket({ ...newTicket, location: e.target.value })}
        />
      </div>
      <button onClick={handleSubmit}>Submit Ticket</button>
    </div>
  );
};

export default TicketForm;