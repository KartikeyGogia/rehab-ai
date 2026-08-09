import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AICoach from "./pages/AICoach";
import ExercisesPage from "./pages/ExercisesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

       
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-coach" element={<AICoach />} />
          <Route path="/exercises" element={<ExercisesPage />} />  
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;