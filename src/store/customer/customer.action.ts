import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CUSTOMER_ACTION_TYPES, Customer } from "./customer.types";

export type FetchCustomerStart = Action<CUSTOMER_ACTION_TYPES.FETCH_CUSTOMER_START>;
export type FetchCustomerSuccess = ActionWithPayload<CUSTOMER_ACTION_TYPES.FETCH_CUSTOMER_SUCCESS, Customer[]>;
export type FetchCustomerFailed = ActionWithPayload<CUSTOMER_ACTION_TYPES.FETCH_CUSTOMER_FAILED, Error>;

export const fetchCustomerStart = withMatcher(
    (): FetchCustomerStart => createAction(CUSTOMER_ACTION_TYPES.FETCH_CUSTOMER_START)
);
export const fetchCustomerSuccess = withMatcher(
    (customerArray: Customer[]): FetchCustomerSuccess => createAction(CUSTOMER_ACTION_TYPES.FETCH_CUSTOMER_SUCCESS, customerArray)
);
export const fetchCustomerFailed = withMatcher(
    (error: Error): FetchCustomerFailed => createAction(CUSTOMER_ACTION_TYPES.FETCH_CUSTOMER_FAILED, error)
);