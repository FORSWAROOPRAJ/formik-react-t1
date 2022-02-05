import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import AllStudents from './Components/AllStudents';
import AddStudents from './Components/AddStudents';
import EditStudent from './Components/EditStudent';
import AllMovies from './Components/AllMovies';
import AddMovie from './Components/AddMovie';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import { useState } from 'react';
import EditMovie from './Components/EditMovie';

export const URL = 'https://61f676aa2e1d7e0017fd6dc3.mockapi.io/student/';
export const Movie_URL='https://61f676aa2e1d7e0017fd6dc3.mockapi.io/movie/';

function App() {

  return (
    <BrowserRouter>
    <div className="App" >
    <div> <Sidebar/></div>
    <div className='Content-div'>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/all-students' element={<AllStudents/>}/>
      <Route path='/add-students' element={<AddStudents/>}/>
      <Route path='/edit-students/:id' element={<EditStudent/>}/>
      <Route path='/movies' element={<AllMovies/>}/>
      <Route path='/add-movie' element={<AddMovie/>}/>
      <Route path='/edit-movie/:id' element={<EditMovie/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </div>
    </div>
</BrowserRouter>
  );
}

export default App;
