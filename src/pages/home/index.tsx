import { pageRoutes } from "@/routes";
import jam_jar from "@assets/home/empty-jam-jar.png";
import { SystemModal } from "@pages/components/SystemModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Diary</h1>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <img src={jam_jar} width={"100%"} style={{ position: "relative" }} />
      </div>
      <SystemModal
        onClose={() => navigate(pageRoutes.SELECT)}
        onClickConfirm={() => navigate(pageRoutes.COMPOSE)}
        title="친구에게 GEM을 보낼까?"
      />
    </div>
  );
};

export default Home;
