import {all, call} from 'redux-saga/effects';
import { customerSaga } from "./customer/customer.saga";
import { productSaga } from './product/product.saga';

export function* rootSaga() {
    yield all([call(customerSaga), call(productSaga)]);
}