import { StyledSystemButton } from "../SystemModal/styles";
import CloseIcon from "@mui/icons-material/Close";

export const CloseButton = () => {
  return (
    <StyledSystemButton maxWidth={10}>
      <CloseIcon fontSize="small" />
    </StyledSystemButton>
  );
};