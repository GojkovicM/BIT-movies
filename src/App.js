import './App.css';
import {  MoviesHandler } from './store/movie';
import { router } from './utilities/routing';
import { RouterProvider } from 'react-router-dom';



function App() {
  return (
    <MoviesHandler>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </MoviesHandler>
  );
}

export default App;
