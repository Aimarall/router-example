import { Route } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Water from "./components/Water/Water";
import Sun from "./components/Sun/Sun";
import Hot from "./components/Hot/Hot";
import Could from "./components/Could/Could";
import Mountain from "./components/Mountain/Mountain";
import Earth from "./components/Earth/Earth";
import Kosmos from "./components/Kosmos/Kosmos";




function App() {
  return (
    <div className="App">
      <div className="Navigations">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contacts" >Contacts</Link>
        <Link to="/water" >Water</Link>
        <Link to="/sun" >Sun</Link>
        <Link to="/hot" >Hot</Link>
        <Link to="/could" >Could</Link>
        <Link to="/mountain" >Mountain</Link>
        <Link to="/earth" >Earth</Link>
        <Link to="/kosmos" >Kosmos</Link>
      </div>



      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/water" component={Water} />
      <Route path="/sun" component={Sun} />
      <Route path="/hot" component={Hot} />
      <Route path="/could" component={Could} />
      <Route path="/mountain" component={Mountain} />
      <Route path="/earth" component={Earth} />
      <Route path="/kosmos" component={Kosmos} />

    </div>
  );
}

export default App;
