import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { json } from "react-router-dom"

const initialState = {
    loading:'',
    api:'',
    data:[]
}

export const createUserAsync = createAsyncThunk(
    'auth/createUserAsync',
    async (params)=>{
        const {data,api} = params 
        const response = await fetch(api,{
            method:'POST',
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(data),
        })
        if(!response){
            console.log(response)
            const error = await response.json()
            return error.json()
        }
        return response.json()
      
    }

)

const auth=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authApi:(state,action)=>{
            state.api=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createUserAsync.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(createUserAsync.fulfilled,(state,action)=>{
            console.log(action)
            state.data = action.payload
            state.loading = false
        })
        .addCase(createUserAsync.rejected,(state,action)=>{
            console.log(action)
            state.loading = false
        })
    }
})

export const {authApi} = auth.actions
export const authReducer = auth.reducer