import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import useLocalStorage from '../hooks/useLocalStorage';
import UsersContext from '../context/UsersContext';
import {manufacturesStorage} from '../hooks/manufacturesStorage';

const AppRouter = () => {
  const [users, setUsers] = useLocalStorage('users', []);
  manufacturesStorage()
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="">
          <UsersContext.Provider value={{ users, setUsers }}>
            <Switch>
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </UsersContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;