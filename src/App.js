import Sidebar from "components/sidebar";
import "./App.css";
import MainPage from "Pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <div className="sidebar-component-container">
        <Sidebar />
      </div>
      <div className="content-component-container">
        <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;
