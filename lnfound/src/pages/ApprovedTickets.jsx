import React, { useState, useEffect } from 'react';
import TicketList from '../components/TicketList';
import lostItemsData from '../data/lostItems.json';

const ApprovedTickets = () => {
  const [tickets, setTickets] = useState(lostItemsData);

  const handleEditTicket = (id, updatedTicket) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
    ));
  };

  const handleApproveTicket = (id) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, status: 'approved' } : ticket
    ));
  };

  const handleDeclineTicket = (id) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, status: 'declined' } : ticket
    ));
  };

  useEffect(() => {
    // Save tickets to local storage or a backend
    localStorage.setItem('lostItems', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    // Load tickets from local storage or a backend
    const storedTickets = localStorage.getItem('lostItems');
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  return (
    <div>
      <section>
        <h2>Approved Lost Item Tickets</h2>
        <TicketList
          tickets={tickets.filter(ticket => ticket.status === 'approved')}
          onEditTicket={handleEditTicket}
          onApproveTicket={handleApproveTicket}
          onDeclineTicket={handleDeclineTicket}
        />
      </section>
    </div>
  );
};

export default ApprovedTickets;