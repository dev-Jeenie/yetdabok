import Compose from "@pages/compose";
import Home from "@pages/home";
import Select from "@pages/select";
import { Route, Routes } from "react-router-dom";

const pageRoutes = {
  HOME: "/",
  SELECT: "/select",
  COMPOSE: "/compose",
  LOGIN: "/login",
};

const routes = [
  <Route path={pageRoutes.HOME} element={<Home />} />,
  <Route path={pageRoutes.SELECT} element={<Select />} />,
  <Route path={pageRoutes.COMPOSE} element={<Compose />} />,
  //   <Route path={pageRoutes.LOGIN} element={<Compose />} />,
  // TODO : 젬자 만들때 & 익명금지 체크시 필요
];

const RouteComponents = () => {
  return <Routes>{routes.map((route) => route)}</Routes>;
};

export default RouteComponents;
export { pageRoutes };
