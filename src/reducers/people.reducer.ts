import { PEOPLE_RECEIVED } from "../helpers/constants";
import { TPerson, TActionPerson } from "./types";

const initialState: Array<TPerson> = [];

export function people(
  state: Array<TPerson> = initialState,
  action: TActionPerson
): Array<TPerson> {
  const { payload, type } = action;

  switch (type) {
    case PEOPLE_RECEIVED:
      let length = state.length;
      return [
        ...state,
        ...payload.map(i => ({ ...i, id: `person-${length++}` }))
      ];
    default:
      return state;
  }
}
