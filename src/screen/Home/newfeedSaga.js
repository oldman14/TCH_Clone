import {takeEvery, call, put} from 'redux-saga/effects';
import {setData} from './newfeedSaga';
import newfeedApi from '../../api/newfeedApi';
function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts);
}

function* fetchNewfeed() {
  // const products = yield Api.fetch('/products')
  const newfeeds = yield newfeedApi.getAll();
  console.log('log on newfeed sa', newfeeds);
  return newfeeds;
}
function* newfeedMainSaga() {
  try {
    const res = yield call(fetchNewfeed);
    yield put(setData(res));
  } catch (error) {
    console.log('get product failed', error);
  }
}
export default newfeedMainSaga;
