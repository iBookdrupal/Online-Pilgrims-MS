import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import { Navbar } from "./components/Layouts/Navbar/Navbar";
import { Footer } from "./components/Layouts/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Posts from "./components/Pages/Post/Posts";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthContext, AuthProvider } from "./context/auth.js";
import AuthRoute from "./components/utils/AuthRoute";

import ResolveNav from "./components/Layouts/Navbar/ResolveNav.js";

import Dashboard from "./components/Pages/Admin/Dashboard";
import Users from "./components/Pages/User/Users.js";
import Registration from "./components/Pages/Registration/Registration";
import RegistrationList from "./components/Pages/Registration/RegistrationList";

import Batches from "./components/Pages/Batch/Batches";

import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";

function App() {
  const { user } = useContext(AuthContext);
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

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <AuthRoute exact path="/users" component={Users} />
                <AuthRoute path="/dashboard" component={Dashboard} />
                <AuthRoute path="/registration" component={Registration} />
                <AuthRoute
                  path="/registrationList"
                  component={RegistrationList}
                />

                <AuthRoute path="/batches" component={Batches} />

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
