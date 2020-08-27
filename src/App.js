import React from 'react';
import './main'
import './App.less';
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
