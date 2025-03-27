import { Route, Routes } from "react-router";
import Navbar from "./components/Layout/Navbar";
import routes from "./routes/routes";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="text-dark-text-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map(({ path, name, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
