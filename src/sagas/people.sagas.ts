import { put, takeLatest, all } from "redux-saga/effects";
import { PEOPLE_RECEIVED, GET_PEOPLE } from "../helpers/constants";

function* fetchPeople() {
  const json = yield fetch("https://swapi.co/api/people/").then(response =>
    response.json()
  );
  yield put({ type: PEOPLE_RECEIVED, payload: json.results });
}

export default function* peopleSaga() {
  yield takeLatest(GET_PEOPLE, fetchPeople);
}
