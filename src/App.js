import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './componentes/Layout';
import Home from './componentes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
