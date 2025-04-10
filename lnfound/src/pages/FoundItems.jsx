// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import Card from '../components/Card';
// import foundItemsData from '../data/foundItems.json';
// import LinkButton from '../components/linkButton';
// const FoundItems = () => {
//   const [foundItems, setFoundItems] = useState(foundItemsData);

//   useEffect(() => {
//     // Save found items to local storage or a backend
//     localStorage.setItem('foundItems', JSON.stringify(foundItems));
//   }, [foundItems]);

//   useEffect(() => {
//     // Load found items from local storage or a backend
//     const storedFoundItems = localStorage.getItem('foundItems');
//     if (storedFoundItems) {
//       setFoundItems(JSON.parse(storedFoundItems));
//     }
//   }, []);

//   return (
//     <div>
//       <section>
//         <h2>Found Items Inventory</h2>
//         <section>
//             <div className="flex justify-center mt-4">

//             <LinkButton linkto="/" value="Home Page"/>
//             <LinkButton linkto="/pending-tickets" value="View Pending Requests"/>
            
//             </div>
//         </section>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {foundItems.map(item => (
//             <Card key={item.id} className="p-4 bg-white rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">Item #{item.id}</h3>
//               <p className="text-gray-700 mb-2">Description: {item.description}</p>
//               <p className="text-gray-700">Location: {item.location}</p>
//             </Card>
//           ))}
//         </div>
//       </section>
      
//     </div>
//   );
// };

// export default FoundItems;

import React from "react";
// import LostItemslist from '../components/LostItemsList.jsx';
import FoundItemsList from "../components/FoundItemsList.jsx";

const FoundItems = () => {
  return <FoundItemsList/>;
}
export default FoundItems;