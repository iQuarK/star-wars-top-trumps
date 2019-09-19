import { ADD_PLAYER, SELECT_CARD, CHECK_WINNER } from "../helpers/constants";
import { TPlayer, TActionPlayer, TPlayerState } from "./types";

const initialState: TPlayerState = { players: [] };

export function players(
  state: TPlayerState = initialState,
  action: TActionPlayer
): TPlayerState {
  const { payload, type } = action;

  switch (type) {
    case ADD_PLAYER: {
      return { players: [...state.players, { name: payload.name }] };
    }
    case SELECT_CARD:
      const index: number = state.players.findIndex(
        element => element.name === payload.name
      );
      if (index > -1) {
        return {
          players: [
            ...state.players.slice(0, index),
            payload,
            ...state.players.slice(index + 1, state.players.length)
          ]
        };
      } else {
        return state;
      }
    case CHECK_WINNER:
      return { ...state, winner: { id: "test", message: "Ed win" } };
    default:
      return state;
  }
}
