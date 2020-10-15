import { call, put, takeLatest } from "redux-saga/effects";

import { receiveAPIData } from "../actions";
import { fetchData } from "../api/api";

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    console.log(data);
    yield put(receiveAPIData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest("REQUEST_API_DATA", getApiData);
}
