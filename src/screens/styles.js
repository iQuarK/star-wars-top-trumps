import styled from "styled-components";

export const CheckButton = styled.button`
  padding: 5px;
  font-size: 20px;
`;

export const PlayersContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const AddPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const AddButton = styled.button`
  font-weight: bold;
  font-size: 24px;
  border-radius: 15px;
  border: thin solid black;
  line-height: 27px;
  margin-left: 10px;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
