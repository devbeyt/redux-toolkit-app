import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_URL = `https://jsonplaceholder.typicode.com/users`;


export const fetchUsers = createAsyncThunk('users/fetchUsers', async()=>{
    const response = await axios.get(`${API_URL}`)
  return response.data
})


const initialState = {
    status:'idle',
    error:null,
    users:[],
}


export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchUsers.pending]:(state,action)=>{
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.status = 'succeeded'
            state.users = action.payload
       },
       [fetchUsers.rejected]:(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
       },
    }
})



export const selectAllUsers = state=>state.users.users;
export default usersSlice.reducer



