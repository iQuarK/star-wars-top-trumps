import React, { MouseEvent } from "react";
import { Container } from "./styles";
import Card from "../Card/Card";
import { TPerson } from "../../reducers/types";

type TProps = {
  onClick(e: MouseEvent): void;
  selectedCard?: string;
  people?: Array<TPerson>;
};

const Cards: React.FC<TProps> = ({ onClick, selectedCard, people }: TProps) => (
  <Container onClick={onClick}>
    {!!people &&
      people.map(item => (
        <Card
          key={item.id}
          item={item}
          selected={selectedCard === item.id}
        ></Card>
      ))}
  </Container>
);

export default Cards;
