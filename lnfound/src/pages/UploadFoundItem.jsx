import React, { useState, useEffect } from 'react';
import LinkButton from '../components/linkButton';
import Card from '../components/Card';
import foundItemsData from '../data/foundItems.json';

const UploadFoundItem = () => {
  const [foundItems, setFoundItems] = useState(() => {
    const storedFoundItems = localStorage.getItem('foundItems');
    return storedFoundItems ? JSON.parse(storedFoundItems) : foundItemsData;
  });
  const [newFoundItem, setNewFoundItem] = useState({ description: '', location: '' });

  const handleAddFoundItem = () => {
    if (newFoundItem.description && newFoundItem.location) {
      setFoundItems([...foundItems, { id: Date.now(), ...newFoundItem }]);
      setNewFoundItem({ description: '', location: '' });
    }
  };

  useEffect(() => {
    // Save found items to local storage
    localStorage.setItem('foundItems', JSON.stringify(foundItems));
  }, [foundItems]);

  return (
    <div>
      <section>
        <h2>Upload Found Item</h2>
        <section>
            <div className="flex justify-center mt-4">

            <LinkButton linkto="/" value="Home Page"/>
            <LinkButton linkto="/pending-tickets" value="View Pending Requests"/>
            
            </div>
        </section>
        <div className="card">
          <h3>Add a Found Item</h3>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={newFoundItem.description}
              onChange={(e) => setNewFoundItem({ ...newFoundItem, description: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              value={newFoundItem.location}
              onChange={(e) => setNewFoundItem({ ...newFoundItem, location: e.target.value })}
            />
          </div>
          <button onClick={handleAddFoundItem}>Upload Item</button>
        </div>
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

export default UploadFoundItem;