import { Route } from 'react-router';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import { Link } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <div className="Navigations">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contacts" >Contacts</Link>
      </div>



      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />

    </div>
  );
}

export default App;
