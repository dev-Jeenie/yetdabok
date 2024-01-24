import jam_jar from "@assets/home/empty-jam-jar.png";

const Home = () => {
  return (
    <div
      style={{
        height: "100dvh",
        maxWidth: "400px",
        // minWidth: "320px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      <h1>내 친구의 Lucky Pot 🍀</h1>
      <div style={{ width: "90%" }}>
        <img src={jam_jar} width={"100%"} style={{ position: "relative" }} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "2vh",
          width: "300px",
          background: "gray",
        }}
      >
        <div
          style={{
            background: "rgb(206 133 192)",
            // background: "rgb(133 141 206)"
            // TODO : 위 두가지 색상으로 애니메이션
            textAlign: "right",
            padding: "0 20px",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "1px solid",
              width: "20px",
              borderRadius: 0,
            }}
          >
            X
          </button>
        </div>
        <div
          style={{
            padding: "20px",
          }}
        >
          <h3>친구에게 복을 보낼까?</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              style={{
                background: "transparent",
                border: "1px solid",
                width: "100%",
                borderRadius: 0,
              }}
            >
              NO
            </button>
            <button
              style={{
                background: "transparent",
                border: "1px solid",
                width: "100%",
                borderRadius: 0,
              }}
            >
              YES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
