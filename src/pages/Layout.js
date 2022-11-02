import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
