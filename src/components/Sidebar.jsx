import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <nav>
        <ul className="nav-list">
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/reserve" activeClassName="reserve">Reserve</NavLink></li>
          <li><NavLink to="/timetable" activeClassName="active">Schedule</NavLink></li>
          <li><NavLink to="/history" activeClassName="active">History</NavLink></li>
          <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>


        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
