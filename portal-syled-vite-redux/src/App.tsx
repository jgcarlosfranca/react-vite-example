import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './routes/Private';
import Login from './pages/Login/Login';
import { paths } from './routes/paths';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={paths.Login} element={<Login />} />
          <Route element={<PrivateRoute />}>

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
