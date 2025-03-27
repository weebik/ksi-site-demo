import Contact from "../pages/Contact";
import HoC from "../pages/HoC";
import Members from "../pages/Members";
import Projects from "../pages/Projects";
import ZOSIa from "../pages/ZOSIa";

const routes = [
  {
    name: "Członkowie",
    path: "/members",
    Component: Members,
  },
  {
    name: "Projekty",
    path: "/projects",
    Component: Projects,
  },
  {
    name: "ZOSIA",
    path: "/zosia",
    Component: ZOSIa,
  },
  {
    name: "Hour of Code",
    path: "/hoc",
    Component: HoC,
  },
  {
    name: "Kontakt",
    path: "/contact",
    Component: Contact,
  },
];

export default routes;
