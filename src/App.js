import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/ManageUser";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Logo from "./components/common/Logo";
function App() {
  return (
    <Router>
      <Header></Header>
      <Logo></Logo>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={User} path="/user" />
      </Switch>
    </Router>
  );
}

export default App;
