import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import Genres from './components/genres/Genres';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Movies from './components/movies/Movies';
import GenreForm from './components/genres/GenreForm';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/genre' element={<Genres />} />
            <Route path='/:id/updateGenre' element={<GenreForm />} />
            <Route path='/:genreId/movies' element={<Movies />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;