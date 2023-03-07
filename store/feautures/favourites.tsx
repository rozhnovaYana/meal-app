import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavouriteState {
  ids: string[];
}
const initialState: FavouriteState = {
  ids: [],
};
export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.filter((id: string) => id !== action.payload.id);
    },
  },
});
export const { addFavourite, removeFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer
