import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FoundItems from './pages/FoundItems';
import PendingTickets from './pages/PendingTickets';
import LostItemsRequests from './pages/LostItemsRequests';
import UploadFoundItem from './pages/UploadFoundItem';
import tietLogo from './tietlogo.png';

const App = () => {
  // Import the logo image

  return (
    <div className="App">
      <header>
        <a href="/">
          <img className="logo" src={tietLogo} alt="TIET Logo" />
          <span className="sr-only">Lost & Found</span>
        </a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/found-items" element={<FoundItems />} />
          <Route path="/pending-tickets" element={<PendingTickets />} />
          <Route path="/lost-items-requests" element={<LostItemsRequests />} />
          <Route path="/upload-found-item" element={<UploadFoundItem />} />
        </Routes>
      </main>
      <footer>
        <p>© 2023 Lost & Found System. All rights reserved.</p>
        <nav>
          <button>Terms of Service</button>
          <button>Privacy</button>
        </nav>
      </footer>
    </div>
  );
};

export default App;