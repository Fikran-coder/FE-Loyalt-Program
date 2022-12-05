import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Login,
  Register,
  History,
  Landing,
  AboutUs,
  Fitur,
  Profile,
} from "@pages";
import { Dashboard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/history" element={<History />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/fitur" element={<Fitur />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
