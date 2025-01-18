// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/header';
// import Home from './pages/home/home';
// import MovieList from './components/moviList/movieList';
// import Movie from './pages/movieDetail/movie';
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header/>
//         <Routes>
//           <Route index element={<Home />}></Route>
//                 <Route path="movie/:id" element={<Movie/>}></Route>
//                 <Route path="movies/:type" element={<MovieList/>}></Route>
//                 <Route path="/*" element={<h1>Error Page</h1>}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import MovieList from './components/moviList/movieList';
import Movie from './pages/movieDetail/movie';
import Login from "./pages/loginPage/login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication

  return (
    <div className="App">
      <Router>
        {isAuthenticated && <Header/>} {/* Show Header only if logged in */}
        <Routes>
          {!isAuthenticated ? (
            // Show the Login page if not authenticated
            <Route path="/*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          ) : (
            // Show main pages if authenticated
            <>
              <Route path="/" element={<Home />} />
              <Route path="movie/:id" element={<Movie />} />
              <Route path="movies/:type" element={<MovieList />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


