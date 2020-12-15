import React  from 'react';
import './App.css';
import Each from './Each';
import Countries from './countries';
import {BrowserRouter as Router,Switch,Route, useLocation, useHistory} from 'react-router-dom';

const Header=()=>{
  const location = useLocation();
  const history=useHistory();

  const handleBackClick=()=>{
    history.goBack();
  }

  const atCountriesPage=location.pathname.includes("/countries");
  return atCountriesPage && <button className="btn btn-lg" onClick={handleBackClick}>Back</button>
}
function App() {
  return (
    <Router>
        <div className="App">
          <h1>WOW</h1>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/countries" exact component={Countries}/>
            <Route exact path="/countries/:name" component={Each}/>
          </Switch>
        </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
