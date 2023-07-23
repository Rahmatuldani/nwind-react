import { combineReducers } from 'redux';
import { customerReducer } from './customer/customer.reducer';
import { ProductReducer } from './product/product.reducer';

export const rootReducer = combineReducers({
    customer: customerReducer,
    products: ProductReducer,
});