// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaCompass, FaMap, FaRobot, FaRss, FaUsers, FaPhone,
  FaArrowRight, FaTimes
} from 'react-icons/fa';
import tiLogo from './tietlogo.png'; // Make sure you have a logo image here

// --- IMPORTANT: Update this with your actual app routes ---
const url="http://tietnexus.vercel.app";
const navigation = [
  { name: "Welcome", href: `${url}/`, icon: FaHome },
  { name: "Explore", href: `${url}/explore`, icon: FaCompass },
  { name: "Campus Map", href: `${url}/map`, icon: FaMap },
  { name: "Thapar AI", href: `${url}/ai`, icon: FaRobot },
  { name: "Feeds", href: `${url}/feeds`, icon: FaRss },
  { name: "Lost & Found", href: `/`, icon: FaUsers },
  { name: "Contact Us", href: `${url}/contact`, icon: FaPhone },
  { name: "Team", href: `${url}/team`, icon: FaUsers },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="sidebar-logo">
          <img src={tiLogo} alt="TIET Logo" className="logo-icon" />
          <span className="logo-text">TIET Nexus</span>
        </div>

        <div className="sidebar-profile">
          <div className="avatar">G</div>
          <div className="profile-info">
            <span className="profile-name">Guest</span>
          </div>
          <a href="#" className="profile-action-btn">
            <FaArrowRight />
          </a>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link ${currentPath === item.href ? 'active' : ''}`}
                >
                  <item.icon className="nav-icon" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </aside>
    </>
  );
};

export default Sidebar;