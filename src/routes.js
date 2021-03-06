import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import App from './App'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import TeamPage from './components/Team/TeamPage';
import TeamManagement from './components/Team/TeamManagement';
import TeamSignup from './components/Signup/TeamSignup';
import TeamUsersLoad from'./components/Team/TeamUsersLoad';
import Donate from './components/Donate/Donate'
import Heroes from './components/Heroes/Heroes'
import BattleDisplay from './components/Team/BattleDisplay'
export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path="/signup" component={Signup} />
    <Route path='/login' component={Login}/>
    <Route path='/teamPage' component={TeamPage}/>
    <Route path= '/teamManagement' component={TeamManagement}/>
    <Route path='/teamSignup' component={TeamSignup}/>
    <Route path='/usersList/:teamId' component={TeamUsersLoad}/>
    <Route path='/donate' component={Donate}/>
    <Route path='/heroes' component={Heroes}/>
    <Route path='/battleDisplay' component={BattleDisplay}/>

  </Switch>
);
