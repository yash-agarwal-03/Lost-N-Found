import React, { useState } from 'react';

const TicketForm = ({ onAddTicket }) => {
  const [newTicket, setNewTicket] = useState({ description: '', location: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTicket(newTicket);
    setNewTicket({ description: '', location: '' });
  };

  return (
    <form className="lnf-form-section" onSubmit={handleSubmit}>
      <span><label htmlFor="description" className="lnf-form-label">Item Description :</label>
      <input
        id="description"
        className="lnf-form-input"
        value={newTicket.description}
        onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
        required
      />
      <label htmlFor="location" className="lnf-form-label">Last Location :</label>
      <input
        id="location"
        className="lnf-form-input"
        value={newTicket.location}
        onChange={(e) => setNewTicket({ ...newTicket, location: e.target.value })}
        required
      /></span>
      <button className="lnf-form-submit" type="submit">SUBMIT</button>
    </form>
  );
};

export default TicketForm;