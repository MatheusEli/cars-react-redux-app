import { configureStore } from '@reduxjs/toolkit';
import {addCar, deleteCar, changeTerm, carsReducer} from './slices/carsSlice';
import {changeName, changeCost, formReducer} from './slices/formSlice';

const store = configureStore({
    reducer: {
        formCar: formReducer,
        carsList: carsReducer
    }
});

export {store, addCar, deleteCar, changeTerm, changeName, changeCost};