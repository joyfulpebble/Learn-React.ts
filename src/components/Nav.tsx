import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink to="/users">users</NavLink>
      <NavLink to="/todos">todos</NavLink>
    </div>
  )
}
