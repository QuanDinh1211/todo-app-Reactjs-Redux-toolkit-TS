import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Const } from '../../consts/rootConst';

import {Todo} from '../slice/todoSlice'


export const getTodos = createAsyncThunk<Todo[]>(
    'todo/getTodos',
    async () => {
      try {
        const response = await axios.get(`${Const.urlApi}/todos`)
        return response.data
      } catch (error: any | {message: string}) {
        return error.response.data
      }
    }
);

export const addTodos = createAsyncThunk<Todo, string>(
  'todo/addTodos',
  async (text) => {
    try {
      const dataTodo = {
        text,
        completed: false,
      }
      const response = await axios.post(`${Const.urlApi}/todos`, dataTodo)
      return response.data
    } catch (error: any | {message: string}) {
      return error.response.data
    }
  }
);

export const editTodos = createAsyncThunk<Todo, Todo>(
  'todo/editTodos',
  async (todo) => {
    try {
      const response = await axios.put(`${Const.urlApi}/todos/${todo.id}`, todo)
      return response.data
    } catch (error: any | {message: string}) {
      return error.response.data
    }
  }
);

export const deleteTodos = createAsyncThunk<Todo, string>(
  'todo/deleteTodos',
  async (todoid) => {
    try {
      const response = await axios.delete(`${Const.urlApi}/todos/${todoid}`)
      return response.data
    } catch (error: any | {message: string}) {
      return error.response.data
    }
  }
);
