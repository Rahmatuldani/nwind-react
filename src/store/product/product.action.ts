import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPES, Product } from "./product.types";

export type FetchProductStart = Action<PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START>;
export type FetchProductSuccess = ActionWithPayload<PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, Product[]>;
export type FetchProductFailed = ActionWithPayload<PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, Error>;

export const fetchProductStart = withMatcher(
    (): FetchProductStart => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START)
);
export const fetchProductSuccess = withMatcher(
    (productArray: Product[]): FetchProductSuccess => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, productArray)
);
export const fetchProductFailed = withMatcher(
    (error: Error): FetchProductFailed => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, error)
);