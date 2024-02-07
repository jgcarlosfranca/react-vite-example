import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './routes/Private';
import Login from './pages/Login/Login';
import LandPage from './pages/LandPage/LandPage';
import { paths } from './routes/paths';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={paths.Login} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path={paths.Land} element={<LandPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
