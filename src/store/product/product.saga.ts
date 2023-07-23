import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchProductFailed, fetchProductSuccess } from "./product.action";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export function* fetchProductAsync() {
    try {
        const response: AxiosResponse = yield call(axios.get, import.meta.env.VITE_API_URL+'/products');
        yield put(fetchProductSuccess(response.data));
    } catch (error) {
        yield put(fetchProductFailed(error as Error));
    }
}

export function * onFetchProduct() {
    yield takeLatest(
        PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START, fetchProductAsync
    );
}

export function* productSaga() {
    yield all([call(onFetchProduct)]);
}