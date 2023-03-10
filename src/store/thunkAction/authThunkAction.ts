import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Const } from '../../consts/rootConst';

import {User} from '../slice/authSlice'


export const login = createAsyncThunk<User, { username: string; password: string }>(
    'auth/login',
    async ({ username, password }) => {
      try {
        const response = await axios.get(`${Const.urlApi}/user/2`)
        if(username === response.data.username && password === response.data.password) {
            return response.data;
        } else {
          return null;
        }
      } catch (error: any | {message: string}) {
        return error.response.data
      }
    }
  );