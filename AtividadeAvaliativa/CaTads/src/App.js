import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import List from './pages/List';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/list",
    element: <List />
  },
  {
    path: "/detail/:id",
    element: <Detail />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;