import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Your page components...
import Home from './pages/Home';
import FoundItems from './pages/FoundItems';
import PendingTickets from './pages/PendingTickets';
import LostItemsRequests from './pages/LostItemsRequests';
import UploadFoundItem from './pages/UploadFoundItem';


// CORRECTED: The path now correctly points into the components folder
import Sidebar from './components/Sidebar/sidebar.jsx'; 
import { FaBars } from 'react-icons/fa';

// This path is correct because App.js and index.css are in the same folder
import './index.css'; 

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content">
        <button 
          className="sidebar-toggle-btn" 
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/found-items" element={<FoundItems />} />
          <Route path="/pending-tickets" element={<PendingTickets />} />
          <Route path="/lost-items-requests" element={<LostItemsRequests />} />
          <Route path="/upload-found-item" element={<UploadFoundItem />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;