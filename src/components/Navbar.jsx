import React from "react";
import '../style/Navbar.css'; 

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
