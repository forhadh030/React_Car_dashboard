import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        name: "Name",
        model: "Model",
        year: "Year",
        price: "Price",
        description: "Description",
        car_quality: "Car Quality",
},
// event listener that dictates where name, email, phone-number, and address goes to
reducers: {
    chooseName: (state, action) => { state.name = action.payload },
    chooseModel: (state, action) => { state.model = action.payload },
    chooseYear: (state, action) => { state.year = action.payload },
    choosePrice: (state, action) => { state.price = action.payload },
    chooseDescription: (state, action) => { state.description = action.payload },
    chooseCarQuality: (state, action) => { state.car_quality = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, 
    chooseModel, 
    chooseYear, 
    choosePrice, 
    chooseDescription, 
    chooseCarQuality } = rootSlice.actions;