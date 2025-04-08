import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FoundItems from './pages/FoundItems';
import PendingTickets from './pages/PendingTickets';
import LostItemsRequests from './pages/LostItemsRequests';
import UploadFoundItem from './pages/UploadFoundItem';

const App = () => {
  return (
    <div className="App">
      <header>
        <a href="#">
          <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12 12 0 010 6.844z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-9-5-9 5 9-5 9 5zm0-13a14 14 0 110 28 14 14 0 010-28zm0 24v-10" />
          </svg>
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