import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AuthForm from "./components/AuthForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
