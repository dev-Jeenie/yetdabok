import { CloseButton } from "../CloseButton";
import {
  StyledHeaderStack,
  // StyledModalBox,
  StyledSystemButton,
} from "./styles";
import { Box, Stack, Typography, ModalProps, Modal } from "@mui/material";

export const SystemModal = ({
  // children,
  title,
  onClose,
  onClickConfirm,
  isOpen,
}: ModalProps & {
  // children: ReactNode;
  title: string;
  onClose: () => void;
  onClickConfirm: () => void;
  isOpen: boolean;
}) => {
  return (
    // <StyledModalBox>
    <Modal open={isOpen}>
      <Box>
        <StyledHeaderStack>
          <CloseButton onClick={() => {}} />
        </StyledHeaderStack>
        <Box padding={2}>
          <Typography variant="body1">{title}</Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <StyledSystemButton onClick={onClose}>
              <Typography variant="caption">Oh, no</Typography>
            </StyledSystemButton>
            <StyledSystemButton onClick={onClickConfirm}>
              <Typography variant="caption">YES!</Typography>
            </StyledSystemButton>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};
