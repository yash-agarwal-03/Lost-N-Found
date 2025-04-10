// import React, { useState, useEffect } from 'react';
// import LinkButton from '../components/linkButton';
// // import foundItemsData from '../data/foundItems.json';
// import FoundItemsList from '../components/FoundItemsList';

// const UploadFoundItem = () => {
//   const [foundItems, setFoundItems] = useState(() => {
//     const storedFoundItems = localStorage.getItem('foundItems');
//     return storedFoundItems ? JSON.parse(storedFoundItems) : foundItemsData;
//   });
//   const [newFoundItem, setNewFoundItem] = useState({ description: '', location: '' });

//   const handleAddFoundItem = () => {
//     if (newFoundItem.description && newFoundItem.location) {
//       setFoundItems([...foundItems, { id: Date.now(), ...newFoundItem }]);
//       setNewFoundItem({ description: '', location: '' });
//     }
//   };

//   useEffect(() => {
//     // Save found items to local storage
//     localStorage.setItem('foundItems', JSON.stringify(foundItems));
//   }, [foundItems]);

//   return (
//     <div>
//       <section>
//         <h2>Upload Found Item</h2>
//         <section>
//             <div className="flex justify-center mt-4">

//             <LinkButton linkto="/" value="Home Page"/>
//             <LinkButton linkto="/pending-tickets" value="View Pending Requests"/>
            
//             </div>
//         </section>
//         <div className="card">
//           <h3>Add a Found Item</h3>
//           <div>
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               value={newFoundItem.description}
//               onChange={(e) => setNewFoundItem({ ...newFoundItem, description: e.target.value })}
//             />
//           </div>
//           <div>
//             <label htmlFor="location">Location</label>
//             <input
//               id="location"
//               value={newFoundItem.location}
//               onChange={(e) => setNewFoundItem({ ...newFoundItem, location: e.target.value })}
//             />
//           </div>
//           <button onClick={handleAddFoundItem}>Upload Item</button>
//         </div>
//       </section>
//       <FoundItemsList/>
//     </div>
//   );
// };

// export default UploadFoundItem;

import React from "react";
import FoundItemsList from "../components/FoundItemsList";

const UploadFoundItem = () => {
  return <FoundItemsList />;}
  export default UploadFoundItem;