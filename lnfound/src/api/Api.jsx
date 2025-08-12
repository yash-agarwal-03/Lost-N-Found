import React from "react";
//create the delete api for found and lost items

const deleteLostTicket = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:5000/lnf/delete/lostTicket/${id}`,{
        method:"DELETE",
      }
    );
    const res=await response.json();
    if (res) {
      console.log(res.data);
      return res.data;
    }
  } catch (err) {
    console.log("Error : delete lost ticket react", err);
  }
};
const deleteFoundItem = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/lnf/delete/foundItem/${id}`,{
          method:"DELETE",
        }
      );
      const res=await response.json();
      if (res) {
        console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.log("Error : delete Found item react", err);
    }
  };
  export {deleteFoundItem,deleteLostTicket};