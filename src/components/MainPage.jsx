import React from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from './Sidebar';

const MainPage = () => {
  return (
    <div>
      <section>
        <div>
          {/* Include the Navbar component */}
          <Navbar />
        </div>
      </section>

      <section>
        <div >
          <div >
            {/* Include the Sidebar component */}
            <Sidebar/>
          </div>
          <div >
            {/* Include the NavPage component */}
            <NavPage/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
