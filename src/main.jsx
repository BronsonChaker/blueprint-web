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
import { AuthProvider } from "./context/AuthContext.jsx";
import ProjectView from "./pages/ProjectView.jsx";
import NewProject from "./pages/Projects/NewProject.jsx";
import Test from "./pages/Text.jsx";
import LayoutDefault from "./pages/Layout/LayoutDefault.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes >
          <Route path="/" element={<LayoutDefault children={<App/>} />}/>
          <Route path="/dashboard" element={<LayoutDefault children={<Dashboard/>} />}/>
          {/* Auth Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* Main Routes */}
          <Route path="/projects" element={<LayoutDefault children={<Projects/>} />}/>
          <Route path="/inspections" element={<LayoutDefault children={<Inpsections/>} />}/>
          <Route path="/reports" element={<LayoutDefault children={<Reports/>} />}/>
          <Route path="/vendors" element={<LayoutDefault children={<Vendors/>} />}/>

          {/* Jobs Routes */}
          <Route path="/jobs/:id" element={<LayoutDefault children={<ProjectView/>} />}/>
          <Route path="/new-project" element={<LayoutDefault children={<NewProject/>} />}/>
          <Route path="/test" element={<LayoutDefault children={<Test/>} />}/>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
