import { put, takeLatest, all } from "redux-saga/effects";
import { ADD_PLAYER, CREATE_PLAYER, CHECK_WINNER } from "../helpers/constants";
import { TPlayer, TWinnerPayload, TWinner } from "../reducers/types";
import { generateName } from "../helpers/names";

function* createPlayerSaga() {
  const player: TPlayer = {
    name: generateName(),
    selectedCard: undefined
  };

  yield put({ type: ADD_PLAYER, payload: player });
}

function* checkWinnerSaga({ players, people }: TWinnerPayload) {
  const peopleByKey = people.reduce(
    (acc, value) => ({ ...acc, [value.id]: value }),
    {}
  );
  const winnerData = players.reduce(
    (acc, value) => {
      const cardId = value.selectedCard;
      if (cardId) {
        const person = peopleByKey[cardId];
        if (acc.max < 0) {
        }
      }
    },
    { id: null, max: -1, message: "" }
  );
  const winner: TWinner = {};
  yield put({ type: SAVE_WINNER, payload: winner });
}

export function* playersSagas() {
  yield all([
    takeLatest(CREATE_PLAYER, createPlayerSaga),
    takeLatest(CHECK_WINNER, checkWinnerSaga)
  ]);
}

export default playersSagas;
