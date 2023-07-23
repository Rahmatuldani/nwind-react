import { AnyAction } from 'redux';
import { Product } from "./product.types";
import { fetchProductFailed, fetchProductStart, fetchProductSuccess } from './product.action';

export type ProductState = {
    readonly products: Product[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const PRODUCT_INITIAL_STATE: ProductState = {
    products: [],
    isLoading: false,
    error: null,
};

export const ProductReducer = ( state = PRODUCT_INITIAL_STATE, action: AnyAction ): ProductState => {
    if (fetchProductStart.match(action)) {
        return {...state, isLoading: true};
    }
    if (fetchProductSuccess.match(action)) {
        return {...state, products: action.payload, isLoading: false, error: null};
    }
    if (fetchProductFailed.match(action)) {
        return {...state, error: action.payload, isLoading: false};
    }
    return state;
};