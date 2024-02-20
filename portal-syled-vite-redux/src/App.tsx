import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './routes/Private';
import Login from './pages/Login/Login';
import LandPage from './pages/LandPage/LandPage';
import { paths } from './routes/paths';
import Lab from "./pages/LabPage/Lab";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={paths.Login} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path={paths.Land} element={<LandPage />} />
            <Route path={paths.LabGeral} element={<Lab />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
