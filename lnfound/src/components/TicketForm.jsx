import React, { useState } from 'react';

const TicketForm = ({ onAddTicket }) => {
  const [newTicket, setNewTicket] = useState({ description: '', location: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTicket(newTicket);
    setNewTicket({ description: '', location: '' });
  };

  return (
    <div className="lnf-form-section">
      <div>
        <label className="lnf-form-label" htmlFor="description">ITEM DESCRIPTION</label>
        <textarea
          id="description"
          className='lnf-form-input '
          value={newTicket.description}
          onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
        />
      </div>
      <div>
        <label className="lnf-form-label" htmlFor="location">LAST LOCATION</label>
        <input
          id="location"
          className='lnf-form-input '
          value={newTicket.location}
          onChange={(e) => setNewTicket({ ...newTicket, location: e.target.value })}
        />
      </div>
      <button className='lnf-form-submit 'onClick={handleSubmit}>Submit Ticket</button>
    </div>
  );
};

export default TicketForm;