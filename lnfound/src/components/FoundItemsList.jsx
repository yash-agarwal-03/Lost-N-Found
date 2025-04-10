import React from "react";
import Card from '../components/Card';
import { useState, useEffect } from "react";
const FoundItemsList = () => {

    const [foundItems, setFoundItems] = useState([]);

    useEffect(()=>{
        const fetchFound=async()=>{
            const data=await fetch("http://localhost:5000/lnf/getFoundItems");
            const items=await data.json();
            setFoundItems(items);
        };
        fetchFound();
    });

    return (
        <section>
        <h2>Found Items Inventory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foundItems.map(item => (
            <Card className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Item #{item._id}</h3>
              <p className="text-gray-700 mb-2">Description: {item.description}</p>
              <p className="text-gray-700">Location: {item.location}</p>
            </Card>
          ))}
        </div>
      </section>
    );

};
export default FoundItemsList;