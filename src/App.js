import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BackDrop from "./components/BackDrop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import HomeScreen from "./screens/HomeScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import LegalScreen from "./screens/LegalScreen";

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

      <Switch>
        {/* Render HomeScreen */}
        <Route exact path="/" component={HomeScreen} />
        {/* Render Login */}
        <Route exact path="/login">
          <Login />
        </Route>
        {/* Render Register */}
        <Route exact path="/register">
          <Register />
        </Route>
        {/* Render Legal Screen */}
        <Route exact path="/legal">
          <LegalScreen />
        </Route>
      </Switch>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
