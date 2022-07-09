import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import UsersList from './components/Pages/UsersList';
import TodosList from './components/Pages/TodosList';

function App() {
  return (
    <BrowserRouter >
      <Nav/>
      <Routes>
        <Route path='/users' element={<UsersList/>}/>
        <Route path='/todos' element={<TodosList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
