import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Page, Next, Prev } from "./pages";

const App = () => {
  const [onPage, setOnPage] = useState(0);

  return (
    <>
      <div>Page Number: {onPage}</div>
      <Routes>
        <Route
          path="/"
          element={<Page onPage={onPage} setOnPage={setOnPage} />}
        />
        <Route
          path="/next"
          element={<Next onPage={onPage} setOnPage={setOnPage} />}
        />
        <Route
          path="/prev"
          element={<Prev onPage={onPage} setOnPage={setOnPage} />}
        />
      </Routes>
    </>
  );
};

export default App;
