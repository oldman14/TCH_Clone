import {takeEvery, call, put} from 'redux-saga/effects';
import menuApi from '../../api/menuApi';
import {setData} from './porductSlice';

function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts);
}

function* fetchProducts() {
  // const products = yield Api.fetch('/products')
  const products = yield menuApi.getAll();
  return products;
}
function* workerSaga() {
  try {
    const res = yield call(fetchProducts);
    yield put(setData(res));
  } catch (error) {
    console.log('get product failed', error);
  }
}
export default workerSaga;
