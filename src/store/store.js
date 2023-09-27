import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorite/favorites.slice";
import { userSlice } from "./user/user.slice";
import { api } from "./api/api";

const reducers =combineReducers({
    favorites: favoritesReducer,
    users: userSlice.reducer,
    [api.reducerPath]:api.reducer,
})


export const store = configureStore({
    reducer: reducers, 
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(api.middleware),
})

