import { createSelector } from "reselect";
import { RootState } from "../store";
import { ProductState } from "./product.reducer";

const selectProductReducer = (state: RootState): ProductState => state.products;

export const selectProduct = createSelector(
    [selectProductReducer],
    (productSlice) => productSlice.products
);
export const selectProductIsLoadin = createSelector(
    [selectProductReducer],
    (productSlice) => productSlice.isLoading
);
export const selectProductError = createSelector(
    [selectProductReducer],
    (productSlice) => productSlice.error
);