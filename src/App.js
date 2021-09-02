import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BackDrop from "./components/BackDrop";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      {/* Navbar */}
      <Navbar click={() => setSideToggle(true)} />
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/* BackDrop */}
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          {/* Render HomeScreen */}
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
