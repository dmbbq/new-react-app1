import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path='/' element={<HomePage />} />
              </Routes>

          </div>
      </BrowserRouter>

  );
}

export default App;
