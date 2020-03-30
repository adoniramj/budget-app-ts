import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter