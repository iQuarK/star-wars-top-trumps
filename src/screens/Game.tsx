import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Player from "../components/Player/Player";
import { TPlayer, TPerson, TState } from "../reducers/types";
import { CREATE_PLAYER, GET_PEOPLE, CHECK_WINNER } from "../helpers/constants";
import { CheckButton, PlayersContainer, AddPlayer, AddButton } from "./styles";

type TProps = {
  players?: Array<TPlayer>;
  people?: Array<TPerson>;
  createPlayer(): void;
  getPeople(): void;
  checkWinner(players: Array<TPlayer>, people?: Array<TPerson>): void;
};

const Game: React.FC<TProps> = ({
  players,
  people,
  createPlayer,
  getPeople,
  checkWinner
}: TProps) => {
  useEffect(() => getPeople(), []);
  return (
    <div>
      <Link to="/rules">Rules</Link>
      <PlayersContainer>
        <AddPlayer>
          Add a new Player
          <AddButton onClick={createPlayer} type="button">
            +
          </AddButton>
        </AddPlayer>
        {!!players &&
          players.map(item => (
            <Player
              key={item.name}
              name={item.name}
              selectedCard={item.selectedCard}
              people={people}
            />
          ))}
      </PlayersContainer>
      {!!players && !!players.length && (
        <CheckButton type="button" onClick={() => checkWinner(players, people)}>
          Check!
        </CheckButton>
      )}
    </div>
  );
};

const mapStateToProps = (state: TState) => ({
  players: state.players.players,
  people: state.people
});

const mapDispatchToProps = (dispatch: any) => ({
  createPlayer: () => dispatch({ type: CREATE_PLAYER }),
  getPeople: () => {
    dispatch({ type: GET_PEOPLE });
  },
  checkWinner: (players: Array<TPlayer>, people?: Array<TPerson>) =>
    dispatch({ type: CHECK_WINNER, payload: { players, people } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
