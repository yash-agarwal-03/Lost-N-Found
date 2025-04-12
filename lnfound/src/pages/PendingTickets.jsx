// import React, { useState, useEffect } from 'react';
// import LinkButton from '../components/linkButton';
// import TicketList from '../components/TicketList';
// import lostItemsData from '../data/lostItems.json';

// const PendingTickets = () => {
//   const [tickets, setTickets] = useState(() => {
//     const storedTickets = localStorage.getItem('lostItems');
//     return storedTickets ? JSON.parse(storedTickets) : lostItemsData;
//   });

//   const handleEditTicket = (id, updatedTicket) => {
//     setTickets(tickets.map(ticket => 
//       ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
//     ));
//   };

//   const handleApproveTicket = (id) => {
//     setTickets(tickets.map(ticket => 
//       ticket.id === id ? { ...ticket, status: 'approved' } : ticket
//     ));
//   };

//   const handleDeclineTicket = (id) => {
//     setTickets(tickets.map(ticket => 
//       ticket.id === id ? { ...ticket, status: 'declined' } : ticket
//     ));
//   };

//   useEffect(() => {
//     // Save tickets to local storage
//     localStorage.setItem('lostItems', JSON.stringify(tickets));
//   }, [tickets]);

//   return (
//     <div>
//         <section>
//             <div className="flex justify-center mt-4">

//             <LinkButton linkto="/" value="Home Page"/>
//             <LinkButton linkto="/lost-items-requests" value="View Lost Items Tickets"/>
            
//             </div>
//         </section>
//       <section>
//         <h2>Pending Lost Item Tickets</h2>
        
//         {tickets.filter(ticket => ticket.status === 'pending').length> 0 ?(
//         <TicketList
//           tickets={tickets.filter(ticket => ticket.status === 'pending')}
//           onEditTicket={handleEditTicket}
//           onApproveTicket={handleApproveTicket}
//           onDeclineTicket={handleDeclineTicket}
//         />) :
//         <p>No pending Requests</p>
// }
//       </section>
      
//     </div>
//   );
// };

// export default PendingTickets;

import React, { useState, useEffect } from "react";
import LostItemslist from '../components/LostItemsList.jsx';
import LinkButton from "../components/linkButton.jsx";
const PendingTickets = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("http://localhost:5000/lnf/getPendingTickets");
        const data = await res.json();
        console.log("Fetched tickets:", data);
        setTickets(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    fetchTickets();
  },[]);
  const updateTicketStatus = (id, newStatus) => {
    setTickets(prev =>
      prev.map(ticket =>
        ticket._id === id ? { ...ticket, status: newStatus } : ticket
      )
    );
  };
  return <section>
    <h2>Pending Requests</h2>
    <section>
             <div className="flex justify-center mt-4">

             <LinkButton linkto="/" value="Home Page"/>
             <LinkButton linkto="/lost-items-requests" value="View Lost Items Tickets"/>
           
             </div>
         </section>
    <LostItemslist lostItems={tickets.filter(ticket=>ticket.status==='pending')} onUpdate={updateTicketStatus}/>
    </section>
}
export default PendingTickets;