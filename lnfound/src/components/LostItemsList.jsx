import React from "react";
import Card from '../components/Card';
// import { useState, useEffect } from "react";
// {_id:0,description:"yes",location:"no",status:"approved"}
const LostItemsList = ({lostItems=[]}) => {
    return (
        <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lostItems.map(item => (
            <Card className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Item #{item._id}</h3>
              <p className="text-gray-700 mb-2">Description: {item.description}</p>
              <p className="text-gray-700">Status: {item.status}</p>
            </Card>
          ))}
        </div>
      </section>
    );

};
export default LostItemsList;