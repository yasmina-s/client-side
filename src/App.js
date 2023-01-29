
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import MultipleTransaction from "./pages/MultipleTransaction";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/MultipleTransaction" component={MultipleTransaction} />
      
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
