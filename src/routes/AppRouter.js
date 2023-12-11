import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Redirect from 'react-router-dom';
import Header from '../components/Header';
import UsersList from '../components/UsersList';
import AddUser from '../components/AddUser';
import useLocalStorage from '../hooks/useLocalStorage';
import EditUser from '../components/EditUser';
import UsersContext from '../context/UsersContext';

const AppRouter = () => {
  const [users, setUsers] = useLocalStorage('users', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <UsersContext.Provider value={{ users, setUsers }}>
            <Routes>
            <Route component={UsersList} path="/" exact={true} />
              <Route component={AddUser} path="/add" />
              <Route component={EditUser} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Routes>
          </UsersContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;