import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Dashboard from "./views/dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/myPhotos" Component={Dashboard} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
