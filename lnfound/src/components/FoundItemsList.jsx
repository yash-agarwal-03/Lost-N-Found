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
      <>
        <div className="lnf-inventory-heading">HERE'S WHAT WE FOUND</div>
          <div className="lnf-inventory-grid">
            {foundItems.map((item) => (
              <div className="lnf-inventory-card" key={item._id}>
                <div className="lnf-inventory-card-id">ITEM ID : #{item._id}</div>
                <div className="lnf-inventory-card-label">ITEM DESCRIPTION</div>
                <div className="lnf-inventory-card-value">{item.description}</div>
                <div className="lnf-inventory-card-label">ITEM LOCATION</div>
                <div className="lnf-inventory-card-value">{item.location}</div>
              </div>
            ))}
          </div>
      </>
    );

};
export default FoundItemsList;