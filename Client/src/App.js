import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { Navbar } from "./components/Layouts/Navbar/Navbar";
import { Footer } from "./components/Layouts/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import AuthRoute from "./components/utils/AuthRoute";
import { AuthProvider } from "./context/auth";
import MenuBar from "./components/Layouts/MenuBar.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <>
          <Container>
            <MenuBar />
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute path="/login" component={Login} />
                <AuthRoute path="/register" component={Register} />
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
