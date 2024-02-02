import { Box, Stack, styled, TextareaAutosize } from "@mui/material";

export const StyledComposeBox = styled(Box)`
  /* background: rgb(241 170 206); */
  border: 2px solid #444444;
  box-sizing: border-box;
  width: 100%;
`;

export const StyledHeader = styled(Stack)`
  background: rgb(241 170 206);
  border-bottom: 2px solid #444444;
`;

export const StyledContentBox = styled(Box)`
  min-height: 60dvh;
  border-color: rgb(242 117 179);
  border-width: 35px 7px 7px 7px;
  border-style: solid;
  border-color: rgb(242 117 179);
  background: #f5f5f5;
  position: relative;
  padding-right: 50px;
`;
export const StyledScrollBox = styled(Box)`
  background: rgb(241 170 206);
  padding-top: 35px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30px;
  border: 2px solid #444444;
  border-width: 2px 2px 2px 0px;
`;

export const StyledTextField = styled(TextareaAutosize)`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border: none;
  color: black;
  :focus-visible {
  }
`;
