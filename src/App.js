import Sidebar from "components/sidebar";
import "./App.css";
import MainPage from "Pages/MainPage/MainPage";
import LogoWithTitle from "components/Logo/logoWithTitle";

function App() {
  return (
    <div className="App">
      <div className="sidebar-component-container">
        {/* <Sidebar /> */}
        <LogoWithTitle></LogoWithTitle>
      </div>
      <div className="content-component-container">
        <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;
