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
import Users from "./components/Pages/User/Users.js";
import Registration from "./components/Pages/Registration/Registration";
import Biodata from "./components/Pages/Registration/Biodata";

import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <>
          <div className="App">
            <ResolveNav />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />

                <Route exact path="/users" component={Users} />
                <AuthRoute path="/login" component={Login} />
                <AuthRoute path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/registration" component={Registration} />
                <Route path="/biodata" component={Biodata} />

                <Route component={PageNotFound} />
              </Switch>
            </Container>
          </div>
        </>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );
}

export default App;
