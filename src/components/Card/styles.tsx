import styled from "styled-components";

export const NormalCardStyle = styled.div`
  width: 100px;
  height: 150px;
  border: thin solid black;
  margin-right: 5px;
  transition: all 0.3s linear;
`;

export const SelectedCardStyle = styled(NormalCardStyle)`
  transform: translate3d(0, -10px, 0);
`;
