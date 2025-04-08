import React, { useState, useEffect } from 'react';
import TicketForm from '../components/TicketForm';
import Card from '../components/Card';
import foundItemsData from '../data/foundItems.json';
import LinkButton from '../components/linkButton';
import AdminControl from '../components/AdminControl';
const Home = () => {
  const [foundItems, setFoundItems] = useState(() => {
    const storedFoundItems = localStorage.getItem('foundItems');
    return storedFoundItems ? JSON.parse(storedFoundItems) : foundItemsData;
  });
  
  useEffect(() => {
    // Save found items to local storage
    localStorage.setItem('foundItems', JSON.stringify(foundItems));
  }, [foundItems]);

  const handleAddTicket = (ticket) => {
    const newTicket = { id: Date.now(), ...ticket, status: 'pending' };
    setFoundItems([...foundItems, newTicket]);
  };

  return (
    <div>
      <section>
        <h2>Lost & Found System</h2>
        <p>Report lost items and view found items.</p>
      </section>
      <AdminControl />
      <section>
        <h2>Raise a Lost Item Ticket</h2>
        <TicketForm onAddTicket={handleAddTicket} />
      </section>
      <section>
        <h2>Found Items Inventory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foundItems.map(item => (
            <Card key={item.id} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Item #{item.id}</h3>
              <p className="text-gray-700 mb-2">Description: {item.description}</p>
              <p className="text-gray-700">Location: {item.location}</p>
            </Card>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Home;