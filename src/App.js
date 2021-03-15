import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./css/main.min.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import DashBoard from "./components/dashBoard/DashBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={outerTheme}>
        <div className="light">
          <Router>
            <div className="app_links">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/dashboard">DashBoard</Link>
              </li>
            </div>
            <Switch>
              <Route path="/register">
                <Register />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/dashboard">
                <Header />
                <DashBoard />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
