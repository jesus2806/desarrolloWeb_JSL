import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff' }}>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/about">Acerca de</Link>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', textAlign: 'center' }}>
        <p>Derechos Reservados 2025</p>
      </footer>
    </div>
  );
};

export default Layout;