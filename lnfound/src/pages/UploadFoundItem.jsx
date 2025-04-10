import React, { useState} from 'react';
import LinkButton from '../components/linkButton';
import FoundItemsList from '../components/FoundItemsList';

const UploadFoundItem = () => {
  const [newFoundItem, setNewFoundItem] = useState({ description: '', location: '' });

  const handleAddFoundItem = async() => {
    if (newFoundItem.description && newFoundItem.location) {
       // Generate a unique ID for the new item
      try{
        const response = await fetch("http://localhost:5000/lnf/addFoundItem", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newFoundItem)
        });
        console.log("Response from server:", response);
      } 
      catch(err){
          console.error("Error adding found item to database", err);
          alert("Error in saving found item to database");
          return;
      }
      setNewFoundItem({ description: '', location: '' });
    }
  };

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
      <FoundItemsList/>
    </div>
  );
};

export default UploadFoundItem;