import React, { MouseEvent } from "react";
import { connect } from "react-redux";
import { SELECT_CARD } from "../../helpers/constants";
import { TPerson } from "../../reducers/types";
import Cards from "../Cards/Cards";

type TProps = {
  name: string;
  selectedCard?: string;
  selectCard(name: string, selectedCard?: string): void;
  people?: Array<TPerson>;
};

const Player: React.FC<TProps> = ({
  name,
  people,
  selectCard,
  selectedCard
}: TProps) => {
  const onClickDelegated = (event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    console.log("delegated");
    console.log(name, (event.target as HTMLElement).dataset.id);
    selectCard(name, (event.target as HTMLElement).dataset.id);
  };

  return (
    <div className="player">
      <h2>Player {name}</h2>
      <div>
        <h3>Please select a card</h3>
        <Cards
          onClick={onClickDelegated}
          selectedCard={selectedCard}
          people={people}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  selectCard: (name: string, selectedCard: string) =>
    dispatch({ type: SELECT_CARD, payload: { name, selectedCard } })
});

export default connect(
  null,
  mapDispatchToProps
)(Player);
