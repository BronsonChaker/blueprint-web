import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Projects from "./pages/Projects.jsx";
import Inpsections from "./pages/Inspections.jsx";
import Reports from "./pages/Reports.jsx";
import Vendors from "./pages/Vendors.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProjectView from "./pages/ProjectView.jsx";
import NewProject from "./pages/Projects/NewProject.jsx";
import Test from "./pages/Text.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route index path="/" element={<App />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* Main Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/inspections" element={<Inpsections />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/vendors" element={<Vendors />} />

          {/* Jobs Routes */}
          <Route path="/jobs/:id" element={<ProjectView />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
