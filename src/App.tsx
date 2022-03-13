
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms/new' element={<NewRoom />} />
      </Routes>
    </Router>
  );
}

export default App;