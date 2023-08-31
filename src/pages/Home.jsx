import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="Home-text">
          <h2>Welcome to Sri Lanka Railways</h2>
          <p>index no:EVO/2023/IND_TR/G4/NP/M/030</p>
        </div>

        <div className="booking-button-container">
          <Link to="/reserve" className="booking-button">
            <button className="book-now">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
