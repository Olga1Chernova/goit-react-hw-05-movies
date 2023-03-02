import { BrowserRouter } from 'react-router-dom';

import Navbar from 'modules/Navbar/Navbar';

import UserRoutes from './UserRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
