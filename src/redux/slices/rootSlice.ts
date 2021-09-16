import {createSlice} from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Tesla',
        model: "Model X",
        price: 1400.00,
        battery_size: '48kw',
        range_on_one_charge: 'approx. 2,000 miles',
        max_speed: '200 kph',
        dimensions: '255 x 312 x 127mm',
        weight: '999 kg',
        cost_of_product: 350.00,
        year: '1999'
    },
    reducers: {
        chooseMake: (state, action) => {state.make = action.payload},
        choosePrice: (state, action) => {state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const {chooseMake, choosePrice} = rootSlice.actions;