import { pageRoutes } from "@/routes";
import jam_jar from "@assets/home/empty-jam-jar.png";
import { Stack } from "@mui/material";
import { SystemModal } from "@pages/components/SystemModal";
import { useNavigate } from "react-router-dom";
import { StyledPageButton } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Jeenie's Diary 💋</h1>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <img src={jam_jar} width={"100%"} style={{ position: "relative" }} />
      </div>
      <Stack
        direction="row"
        maxWidth="50px"
        margin="0 auto"
        justifyContent="center"
      >
        <StyledPageButton>이전</StyledPageButton>
        <StyledPageButton>다음</StyledPageButton>
      </Stack>
      <SystemModal
        // onClose={() => navigate(pageRoutes.SELECT)}
        onClose={() => {}}
        onClickConfirm={() => navigate(pageRoutes.COMPOSE)}
        title="방명록을 남길까?"
      />
    </div>
  );
};

export default Home;
