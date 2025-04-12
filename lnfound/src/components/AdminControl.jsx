import React from "react";
import { useState } from "react";
import LinkButton from "./linkButton";
const AdminControl = () => {
  const [showAdminPopup, setShowAdminPopup] = useState(false);
  return (
    <div className="relative">
      {(showAdminPopup && ( //if admin prompt is True, show the admin nav control
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-6 z-50 w-[90%] max-w-md">
          <h2 className="text-xl font-bold mb-4">Admin Control</h2>
          <div className="flex justify-center space-x-4">
            <LinkButton
              linkto="/pending-tickets"
              value="View Pending Requests"
            />
            <LinkButton linkto="/upload-found-item" value="Upload Found Item" />
          </div>
        </div>
      )) || (
        //else show the prompt for admin auth
        <section className="text-center my-6">
          <p className="text-lg font-semibold">Are you an admin?</p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                margin: "0 10px",
                transition: "ease-in-out 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "1px 1px 5px #000")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              onClick={() => setShowAdminPopup(true)} //set the admin prompt to true
            >
              Yes
            </button>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                margin: "0 10px",
                transition: "ease-in-out 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "1px 1px 5px #000")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              onClick={() => setShowAdminPopup(false)}
            >
              No
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdminControl;
