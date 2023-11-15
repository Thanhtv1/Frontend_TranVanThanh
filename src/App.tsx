import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App overflow-y-hidden h-screen w-screen flex flex-col ">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
