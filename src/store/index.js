import { configureStore } from '@reduxjs/toolkit';
import {addCar, removeCar, changeSearchTerm, carsReducer} from './slices/carsSlice';
import {changeName, changeCost, formReducer} from './slices/formSlice';
import { reset } from './actions/actions';
const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

export {store, reset, addCar, removeCar, changeSearchTerm, changeName, changeCost};