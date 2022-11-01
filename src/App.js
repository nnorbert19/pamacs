import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Home/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
