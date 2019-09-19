export type TPerson = {
  id: string;
  birthYear: string;
  created: string;
  edited: string;
  eyeColor: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skinColor: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
  selectedCard?: number;
};

export type TActionPerson = {
  type: string;
  payload: Array<TPerson>;
};

export type TPlayer = {
  name: string;
  selectedCard?: string;
};

export type TActionPlayer = {
  type: string;
  payload: TPlayer;
};

export type TWinner = {
  id: string;
  message: string;
};

export type TWinnerPayload = {
  players: Array<TPlayer>;
  people: Array<TPerson>;
};

export type TPlayerState = {
  players: Array<TPlayer>;
  winner?: TWinner;
};

export interface TState {
  people: Array<TPerson>;
  players: TPlayerState;
}
