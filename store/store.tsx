import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./feautures/favourites";
const store = configureStore({
    reducer: {
        favourites: favouriteReducer
    }
});
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch