import React from "react";
import { TPerson } from "../../reducers/types";
import { NormalCardStyle, SelectedCardStyle } from "./styles";

type TProps = {
  item: TPerson;
  selected?: boolean;
};

const Card: React.FC<TProps> = ({ selected = false, item }: TProps) => {
  const Elem = selected ? SelectedCardStyle : NormalCardStyle;
  return (
    <Elem data-id={item.id}>
      <div>{item.name}</div>
      <div>Mass: {item.mass}</div>
    </Elem>
  );
};

export default Card;
