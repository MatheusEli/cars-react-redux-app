import { createSlice } from '@reduxjs/toolkit';


const carsSlice = createSlice({
    name: 'cars',
    initialState: [],
    reducers:{
        changeTerm(state, action){
            return state.filter((element) => {
                return element.name === action.payload;
            });
        },
        addCar(state, action){
            state.push(action.payload);
        },
        deleteCar(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    }
});

export const {changeTerm, addCar, deleteCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;