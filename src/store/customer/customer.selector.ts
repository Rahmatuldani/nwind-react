import { createSelector } from "reselect";
import { RootState } from "../store";
import { CustomerState } from "./customer.reducer";

const selectCustomerReducer = (state: RootState): CustomerState => state.customer;

export const selectCustomer = createSelector(
    [selectCustomerReducer],
    (customerSlice) => customerSlice.customer
);
export const selectCustomerIsLoadin = createSelector(
    [selectCustomerReducer],
    (customerSlice) => customerSlice.isLoading
);
export const selectCustomerError = createSelector(
    [selectCustomerReducer],
    (customerSlice) => customerSlice.error
);