import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './componentes/Layout';
import Home from './componentes/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
