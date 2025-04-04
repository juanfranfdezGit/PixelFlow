import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Dashboard from "./views/dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/myPhotos" Component={Dashboard} />
      </Routes>
    </>
  )
}

export default App
