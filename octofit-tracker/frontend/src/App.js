import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" className="octofit-logo" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Actividades</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Equipos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Entrenamientos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2 className="display-5 text-center my-5">Bienvenido a Octofit Tracker</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
