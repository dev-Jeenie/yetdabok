import { Stack } from "@mui/material";
import { useState } from "react";
import {
  StyledComposeBox,
  StyledContentBox,
  StyledHeader,
  StyledScrollBox,
  StyledTextField,
} from "./styles";

const Compose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <h1>Compose Message</h1>
      <StyledComposeBox>
        <StyledHeader
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing="20px" p="10px">
            <h4>File</h4>
            <h4>Edit</h4>
          </Stack>
          {/* <CloseButton onClick={handleOpenModal} /> */}
          {/* <SystemModal
            open={isOpen}
            // onClose={!isOpen}
            title={""}
            onClickConfirm={function (): void {
              throw new Error("Function not implemented.");
            }}
          /> */}
        </StyledHeader>
        <StyledContentBox>
          <StyledTextField id="message" />
          <StyledScrollBox children={undefined} />
        </StyledContentBox>
      </StyledComposeBox>
    </>
  );
};

export default Compose;
