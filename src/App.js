import { Route } from 'react-router';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";




function App() {
  return (
    <div className="App">
      <a href="/" >Home</a>
      <a href="/about" >About</a>   
      <a href="/contacts" >Contacts</a>
    

      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
     
    </div>
  );
}

export default App;
