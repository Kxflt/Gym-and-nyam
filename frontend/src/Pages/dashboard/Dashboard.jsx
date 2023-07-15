import React from 'react';
import NavBar from '../../Components/nav-bar/NavBar';
import Footer from '../../Components/Shared/Footer/Footer'
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <NavBar />
      <main className='main-content'>
        <h1>LA PAGINA DONDE VA A ENTRAR TODO EL MUNDO</h1>
        </main>
      <Footer />
 
  </div>
  );
}

export default Dashboard;
