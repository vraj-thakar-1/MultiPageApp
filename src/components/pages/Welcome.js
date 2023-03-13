import React from "react";
import { Route, Routes } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>welcome page</h1>
      <Routes>
        <Route path="/welcome/new-user" element={<p>siajfsjfsfsj</p>} />
      </Routes>
    </section>
  );
}
