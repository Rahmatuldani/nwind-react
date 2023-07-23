import { AnyAction } from 'redux';
import { Customer } from "./customer.types";
import { fetchCustomerFailed, fetchCustomerStart, fetchCustomerSuccess } from './customer.action';

export type CustomerState = {
    readonly customer: Customer[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const CUSTOMER_INITIAL_STATE: CustomerState = {
    customer: [],
    isLoading: false,
    error: null,
};

export const customerReducer = ( state = CUSTOMER_INITIAL_STATE, action: AnyAction ): CustomerState => {
    if (fetchCustomerStart.match(action)) {
        return {...state, isLoading: true};
    }
    if (fetchCustomerSuccess.match(action)) {
        return {...state, customer: action.payload, isLoading: false, error: null};
    }
    if (fetchCustomerFailed.match(action)) {
        return {...state, error: action.payload, isLoading: false};
    }
    return state;
};