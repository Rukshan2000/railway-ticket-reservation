import React from "react";
import { BsBook } from 'react-icons/bs';
import '../style/Navbar.css'; // Make sure to adjust the path accordingly

const Navbar = () => {
  return (
    <section>
      <div className='navbar'>
        <div>
        <img className="icon" src={require('../images/railwayLogo.png')} alt="Sri Lanka Railways Logo" />
        </div>

        <div className='title'>
          <p >ශ්‍රී ලංකා දුම්රිය සේවය</p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
