import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NewUser from "./components/NewUser";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users/:id" element={<Profile />} />
        <Route exact path="/newuser" element={<NewUser />} />
      </Routes>
    </div>
  );
}

export default App;
