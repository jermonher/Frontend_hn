import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import Navbar from './Navbars/Navbar';

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./assets/theme";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
    
      
      <AuthProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <div className="container mx-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        </div>
        </ThemeProvider>
      </AuthProvider>
      
      
    </BrowserRouter>
  );
}

export default App;