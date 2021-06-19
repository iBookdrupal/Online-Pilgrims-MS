import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { Navbar } from "./components/Layouts/Navbar/Navbar";
import { Footer } from "./components/Layouts/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Posts from "./components/Pages/Post/Posts";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import AuthRoute from "./components/utils/AuthRoute";
import { AuthProvider } from "./context/auth";
import ResolveNav from "./components/Layouts/Navbar/ResolveNav.js";
import Dashboard from "./components/Pages/Admin/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <>
          <Container>
            <div className="App">
              <ResolveNav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/dashboard" component={Dashboard} />
                <AuthRoute path="/login" component={Login} />
                <AuthRoute path="/register" component={Register} />
                <AuthRoute path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
            <Footer />
          </Container>
        </>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
