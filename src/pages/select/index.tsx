import { Box, Typography } from "@mui/material";
import { SystemModal } from "@pages/components/SystemModal";

const Select = () => {
  return (
    <Box>
      <Typography variant="h4">Select Your Paper</Typography>
      {/* <h1>Select your Gem</h1> */}
      <SystemModal
        title={"작성하러 가자!"}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        onClickConfirm={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Box>
  );
};

export default Select;
