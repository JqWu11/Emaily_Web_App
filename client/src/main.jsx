// src/Home.jsx
import React from 'react';
import './styles.css'; // Import your CSS file for styling

function Home() {
  return (
    <div>
      <header>
        <img
          src="https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/Block_M-Hex.png"
          alt="University of Michigan Block M Logo"
          id="logo"
        />
        <h1>Welcome to MHousr</h1>
      </header>

      <section className="intro">
        <p>Your one-stop solution to find housing near the University of Michigan!</p>
        <input type="text" id="searchInput" placeholder="Search for housing..." />
        <button id="searchBtn">Search</button>
      </section>

      <section className="listings">
        <div className="listing-box">
          <a href="property-details.html">
            <h2 className="listing-title">123 Main St, Ann Arbor, MI</h2>
            <img
              src="https://images1.apartments.com/i2/zxlRM-Pd0yKP2mB-4zTCw26ArWhVCfVKDZrkN0gdNxw/111/the-courtyards-apartments-ann-arbor-mi-courtyard-student-apartments.jpg"
              alt="House 1"
              className="listing-img"
            />
            <div className="listing-info">
              <h3>$1200/month</h3>
              <p>2 beds, 1 bath</p>
            </div>
          </a>
        </div>

        <div className="listing-box">
          <a href="property-details.html">
            <h2 className="listing-title">456 Oak Dr, Ann Arbor, MI</h2>
            <img src="https://via.placeholder.com/600x400" alt="House 2" className="listing-img" />
            <div className="listing-info">
              <h3>$1500/month</h3>
              <p>3 beds, 2 baths</p>
            </div>
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 MHousr</p>
      </footer>
    </div>
  );
}

export default Home;
