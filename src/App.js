import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;

