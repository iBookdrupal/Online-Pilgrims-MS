import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {Navbar} from './components/Layouts/Navbar/Navbar'
import { Footer } from './components/Layouts/Footer/Footer'
import Home from './components/Pages/Home/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <> 
        <Navbar/>
    <div className="App">
          <h2>App JS </h2>
          <Switch>
            <Route exact path='/' component={Home} />
            
            </Switch>
        </div>

        <Footer /> 
        </>
      </BrowserRouter>
  );
}

export default App;
