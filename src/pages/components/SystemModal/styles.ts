import { Box, Button, Stack } from "@mui/material";
import styled from "styled-components";

export const StyledModalBox = styled(Box)`
  position: absolute;
  bottom: 2vh;
  width: 300px;
  // background: gray;
  background: #d3b0ec;
  box-shadow: 1px 1px 7px 1px rgb(98 83 118);
`;

export const StyledSystemButton = styled(Button)<{
  maxWidth?: number;
  color?: string;
}>`
  && {
    border-radius: 0;
    /* background: transparent; */
    background: ${({ color = "#ab90d0" }) => color};
    /* border: 1px solid; */
    width: 100%;
    ${({ maxWidth }) => `${maxWidth ? `max-width:${maxWidth}px;` : ""}`}
    /* max-width:20px; */
    padding: 4px;
    /* color: white; */
    color: #000000;
    /* border-color: #656565; */
    box-shadow: 1px 1px 2px 0px rgb(98 83 118);
  }
`;

export const StyledHeaderStack = styled(Stack)`
  align-items: flex-end;
  justify-content: center;
  /* background: rgb(206 133 192); */
  /* background: rgb(133 141 206) */
  // TODO : 위 두가지 색상으로 애니메이션
  /* background: rgb(118 37 220); */
  background: rgb(147 74 155);

  text-align: right;
  padding: 4px 10px;
`;
