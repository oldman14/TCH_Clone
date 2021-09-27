import workerSaga from '../screen/Order/productSaga';
import {all, takeLatest} from '@redux-saga/core/effects';
import {fetchData} from '../screen/Order/porductSlice';
import {fetchNewfeeds} from '../screen/Home/newfeedSlice';
import newfeedMainSaga from '../screen/Home/newfeedSaga';
export default function* rootSaga() {
  yield takeLatest(fetchNewfeeds.type, newfeedMainSaga);

  yield takeLatest([fetchData.type], workerSaga);
}
