import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "../../constants";

async function fetchData(payload) {
  const { page, company, role } = payload;
  try {
    let res = await fetch(
      `http://staging-api.preptick.com/questions.json?page=${page}&company=${company}&role=${role}`
    );
    let data = await res.json();
    return {
      error: false,
      data
    };
  } catch (exp) {
    return {
      error: true,
      data: exp
    };
  }
}

function* getData(action) {
  let {data} = yield call(fetchData, action.payload);
  yield put({ type: types.SET_DATA, payload: data });
}

export default function* homeSaga() {
  yield takeLatest(types.GET_DATA, getData);
}
