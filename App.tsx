import * as React from 'react';
import './style.css';

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-links">
          <a className="links" href="">
            Test
          </a>
          <a className="links" href="">
            Test
          </a>
          <a className="links" href="">
            Test
          </a>
          <a className="links" href="">
            Test
          </a>
        </div>
        <div className="navbar-links">
          <a className="links" href="">
            Test
          </a>
          <a className="links" href="">
            Test
          </a>
        </div>
      </nav>
      <div className="search-bar-section">
        <p>Want a ticket? We got you covered.</p>
        <input className="search-bar" placeholder="Search for event" />
      </div>
    </div>
  );
};

export default App;
