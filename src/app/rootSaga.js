import workerSaga from '../screen/Order/productSaga';
import {all, takeLatest} from '@redux-saga/core/effects';
import {fetchData} from '../screen/Order/porductSlice';
export default function* rootSaga() {
  yield takeLatest(fetchData.type, workerSaga);
}
