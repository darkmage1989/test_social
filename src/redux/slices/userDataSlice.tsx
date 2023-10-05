import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../interfaces/dataInterface";
const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    userData: []
  },
  reducers: {
    userData: (state, actions) => {
        state.userData = actions.payload.userData; // используется для локального хранения массива данных из запроса
    },
  },
});
export const { userData } = userDataSlice.actions;
export default userDataSlice.reducer;
