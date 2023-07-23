import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchCustomerFailed, fetchCustomerSuccess } from "./customer.action";
import { CUSTOMER_ACTION_TYPES } from "./customer.types";

export function* fetchCustomerAsync() {
    try {
        const response: AxiosResponse = yield call(axios.get, import.meta.env.VITE_API_URL+'/customers');
        yield put(fetchCustomerSuccess(response.data));
    } catch (error) {
        yield put(fetchCustomerFailed(error as Error));
    }
}

export function * onFetchCustomer() {
    yield takeLatest(
        CUSTOMER_ACTION_TYPES.FETCH_CUSTOMER_START, fetchCustomerAsync
    );
}

export function* customerSaga() {
    yield all([call(onFetchCustomer)]);
}