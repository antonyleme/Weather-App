import { call, fork, put, takeEvery, take } from "redux-saga/effects";
import citiesRef from "~/services/city.service";
import { eventChannel } from "redux-saga";

async function getData() {
  const citiesArr = [];

  const snapshot = await citiesRef.get();
  snapshot.forEach((doc) => {
    citiesArr.push({ key: doc.key, data: doc.val() });
  });

  return citiesArr;
}

function* fetchCities(action) {
  try {
    const cities = yield call(getData);
    yield put({ type: "@cities/GET_SUCCESS", cities });
  } catch (e) {
    yield put({ type: "@cities/GET_FAILED", message: e.message });
  }
}

async function* addCity(action) {
  try {
    const city = yield call(await citiesRef.push(action.data));
    console.log(city);
    yield put({ type: "@cities/ADD", city });
  } catch (e) {
    yield put({ type: "@cities/GET_FAILED", message: e.message });
  }
}

function createEventChannel() {
  const listener = eventChannel((emit) => {
    citiesRef.on("child_added", (data) =>
      emit({ key: data.key, data: data.val() })
    );
    return () => citiesRef.off(listener);
  });

  return listener;
}

function* updatedItemSaga() {
  const updateChannel = createEventChannel();
  while (true) {
    const city = yield take(updateChannel);
    console.log(city);
    yield put({ type: "@cities/INSERT_ITEM", city });
  }
}

function* citySaga() {
  yield takeEvery("@cities/GET_REQUESTED", fetchCities);
  yield fork(updatedItemSaga);
}

export default citySaga;
