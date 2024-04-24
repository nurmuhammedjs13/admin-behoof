import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    products: [];
}

const initialState: InitialState = {
    products: [],
};

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        toggleShow() {
            
        },
    },
});

export const { toggleShow } = listSlice.actions;
export default listSlice.reducer;
