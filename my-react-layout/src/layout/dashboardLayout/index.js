import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';


function Dashboard() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <main>
        <h1>Welcome to the Dashboard</h1>
     
      </main>
    </div>
  );
}

export default Dashboard;
