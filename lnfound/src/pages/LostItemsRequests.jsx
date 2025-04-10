import React, { useState, useEffect } from 'react';
import LinkButton from '../components/linkButton';
import TicketList from '../components/TicketList';
// import lostItemsData from '../data/lostItems.json';
import LostItemsList from '../components/LostItemsList';

const LostItemsRequests = () => {
  console.log("LostItemsRequests component mounted");
  // const [tickets, setTickets] = useState(() => {
  //   const storedTickets = localStorage.getItem('lostItems');
  //   return storedTickets ? JSON.parse(storedTickets) : lostItemsData;
  // });

  // const handleEditTicket = (id, updatedTicket) => {
  //   setTickets(tickets.map(ticket => 
  //     ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
  //   ));
  // };

  // const handleApproveTicket = (id) => {
  //   setTickets(tickets.map(ticket => 
  //     ticket.id === id ? { ...ticket, status: 'approved' } : ticket
  //   ));
  // };

  // const handleDeclineTicket = (id) => {
  //   setTickets(tickets.map(ticket => 
  //     ticket.id === id ? { ...ticket, status: 'declined' } : ticket
  //   ));
  // };

  // useEffect(() => {
  //   // Save tickets to local storage
  //   localStorage.setItem('lostItems', JSON.stringify(tickets));
  // }, [tickets]);
    const [tickets,setTickets]=useState([]);
    useEffect(() => {
      const fetchTickets = async () => {
        try {
          const res = await fetch("http://localhost:5000/lnf/getLostTickets");
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
    return (
    <div>
      <section>
        <div className="flex justify-center mt-4">
                    
            <LinkButton linkto="/" value="Home Page"/>
            <LinkButton linkto="/pending-tickets" value="View Pending Requests"/>
            
        </div>
      </section>
      <section>
        <h2>Lost Items Tickets</h2>
          {tickets.filter(ticket => ticket.status === 'pending').length > 0 ? (
          <p>Pending tickets available to approve</p>):(<p>No pending tickets</p>)}
          <LostItemsList lostItems={tickets.filter(ticket => ticket.status !== 'pending')}/>
          {/* <TicketList
            tickets={tickets.filter(ticket => ticket.status !== 'pending')}
            onEditTicket={handleEditTicket}
            onApproveTicket={handleApproveTicket}
            onDeclineTicket={handleDeclineTicket}
          /> */}
      </section>
    </div>
  );
};

export default LostItemsRequests;
