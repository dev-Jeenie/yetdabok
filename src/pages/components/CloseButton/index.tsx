import { StyledSystemButton } from "../SystemModal/styles";
import CloseIcon from "@mui/icons-material/Close";

export const CloseButton = ({
  onClick,
  color,
}: {
  onClick: () => void;
  color?: string;
}) => {
  return (
    <StyledSystemButton maxWidth={10} onClick={onClick} color={color}>
      <CloseIcon fontSize="small" />
    </StyledSystemButton>
  );
};
