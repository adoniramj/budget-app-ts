import React from 'react'
import { NavLink } from 'react-router-dom'


const Header:React.FunctionComponent<{}> = ():JSX.Element => (
  <header>
    <NavLink to='/' activeClassName='isActive'>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='isActive'>Create Expense</NavLink>
  </header>
)

export default Header