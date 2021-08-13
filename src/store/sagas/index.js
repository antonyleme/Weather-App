import { all } from "redux-saga/effects";
import citySaga from "./citySaga";

export default function* rootSaga() {
  yield all([citySaga()]);
}
