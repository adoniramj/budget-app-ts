import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import NotFound from '../components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter