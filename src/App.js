import '@/App.css';

import Service from '@/pages/Service';
import Home from '@/pages/Home.js'
import Contact from '@/pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/home" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
