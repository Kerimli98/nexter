import "./sass/main.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import Story from "./components/Story";
import StoryContent from "./components/StoryContent";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
