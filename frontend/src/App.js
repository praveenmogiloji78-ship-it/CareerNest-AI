import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import ApplyJob from "./pages/ApplyJob";
import Profile from "./pages/Profile";
import SavedJobs from "./pages/SavedJobs";
import Notifications from "./pages/Notifications";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import AdminPanel from "./pages/AdminPanel";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/apply"
          element={<ApplyJob />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/savedjobs"
          element={<SavedJobs />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/resume-analyzer"
          element={<ResumeAnalyzer />}
        />

        <Route
          path="/admin"
          element={<AdminPanel />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;