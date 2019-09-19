import { all } from "redux-saga/effects";
import peopleSagas from "./sagas/people.sagas";
import playersSagas from "./sagas/players.sagas";

export default function* rootSaga() {
  yield all([peopleSagas(), playersSagas()]);
}
