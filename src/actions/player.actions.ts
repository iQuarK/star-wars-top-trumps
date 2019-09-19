import { CREATE_PLAYER } from "../helpers/constants";

export const createPlayer = () => (dispatch: any) => {
  dispatch({
    type: CREATE_PLAYER
  });
};
