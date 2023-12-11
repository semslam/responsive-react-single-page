import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchManufacturesStorage } from '../hooks/manufacturesLocalStorage';

const UserForm = (props) => {
  const [user, setUser] = useState(() => {
    return {
      name: props.user ? props.user.name : '',
      manufactures: props.user ? props.user.manufactures : [], // Corrected property name
      agree: props.user ? props.user.agree : false,
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [manufacturesOptions, setManufacturesOptions] = useState([]);

  useEffect(() => {
    const options = fetchManufacturesStorage();
    setManufacturesOptions(options || []);
  }, []);

  const { name, manufactures, agree } = user;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, manufactures, agree];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const userData = {
        id: uuidv4(),
        name,
        manufactures,
        agree,
        createdAt: new Date(),
      };
      props.handleOnSubmit(userData);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked, options } = event.target;
    switch (name) {
      case 'agree':
        setUser((prevState) => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value,
        }));
        break;
      case 'manufactures':
        const selectedOptions = Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value);
        setUser((prevState) => ({
          ...prevState,
          manufactures: selectedOptions,
        }));
        break;
      default:
        setUser((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <form onSubmit={handleOnSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Manufactures:
          <select
            name="manufactures"
            value={manufactures}
            onChange={handleInputChange}
            multiple
            required
          >
            {manufacturesOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Agree to terms:
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;