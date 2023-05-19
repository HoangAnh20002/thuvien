import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import HomeScreen from "./components/View/HomeScreen";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import View from "./components/Detail/View";
import Edit from "./components/Detail/Edit";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/View' element={<View />} />
          <Route path='/Edit' element={<Edit />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
