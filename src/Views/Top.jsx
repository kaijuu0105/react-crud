import React from "react";
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Top = () => {
    const [error, setError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleLogin = async (data) => {
      // useFormを使うならe.preventDefault();はいらない。
      console.log(data);
      try {
        const response = await axios.get('https://663f8e48e3a7c3218a4d61b8.mockapi.io/api/v1/crud');
        const users = response.data;
        console.log(users);
        const user = users.find(user => user.firstName === data.firstName && user.lastName === data.lastName);
        console.log(user);
        if (user) {
          navigate('/create');
        } else {
          setError('Invalid username or password');
        }
      } catch (err) {
        setError('Login failed. Please try again.');
      }
    };

    return (
      <div>
        <div className="register">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label>FirstName</label>
              <input
                type="text"
                {...register('firstName', { required: '名前を入力してください' })}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div>
              <label>LastName</label>
              <input
                type="text"
                {...register('lastName', { required: '名字を入力してください' })}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <button type="submit">Login</button>
          </form>
          {error && <p>{error}</p>}
        </div>
        <Link to='/register'>
          アカウントないなら新規登録しちゃう？？
        </Link>
      </div>
    );
  }



export default Top