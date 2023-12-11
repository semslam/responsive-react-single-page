import React, { useState, useEffect } from 'react';

const UsersList = ({ onEdit }) => {
  const [usersDataList, setUserDataList] = useState([]);

  useEffect(() => {
    // Load user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('usersDataList')) || [];
    setUserDataList(storedUserData);
  }, []);

  const columns = ['ID', 'Name', 'Manufacture', 'Agree to Terms', 'Edit'];

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {usersDataList.map((userData) => (
          <tr key={userData.id}>
            <td>{userData.id}</td>
            <td>{userData.name}</td>
            <td>{userData.manufactures}</td>
            <td>{userData.agree ? 'Yes' : 'No'}</td>
            <td>
              <button onClick={() => onEdit(userData.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;