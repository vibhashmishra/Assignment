import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllRoutes } from './AllRoutes';

function App() {
  return (
<>
<Router>
        <Routes>
          {AllRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
        </Routes>
    </Router></>
  );
}

export default App;
