// import { Redirect, Route, Switch } from 'react-router';
// import './App.css';
// import { Link, NavLink } from 'react-router-dom';

// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contacts from "./components/Contacts/Contacts";
// import Water from "./components/Water/Water";
// import Sun from "./components/Sun/Sun";
// import Hot from "./components/Hot/Hot";
// import Could from "./components/Could/Could";
// import Mountain from "./components/Mountain/Mountain";
// import Earth from "./components/Earth/Earth";
// import Space from "./components/Space/Space";




// function App() {
//   return (
//     <div className="App">

//       {/* <div className="Navigations">
//         <Link to="/" >Home</Link>
//         <Link to="/about" >About</Link>
//         <Link to="/contacts" >Contacts</Link>
//         <Link to="/water" >Water</Link>
//         <Link to="/sun" >Sun</Link>
//         <Link to="/hot" >Hot</Link>
//         <Link to="/could" >Could</Link>
//         <Link to="/mountain" >Mountain</Link>
//         <Link to="/earth" >Earth</Link>
//         <Link to="/space" >Space</Link>
//       </div>
//  */}

//       <ul>
//         <li>
//           <NavLink activeClassName="active" to="/" exact>Home</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/about" exact>About</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/contacts" exact>Contacts</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/water" exact>Water</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/sun" exact>Sun</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/hot" exact>Hot</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/could" exact>Could</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/mountain" exact>Mountain</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/earth" exact>Earth</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/space" exact>Space</NavLink>
//         </li>
//       </ul>


//       <Switch>
//         <Route path="/" component={Home} exact />
//         <Route path="/about" component={About} />
//         <Route path="/about" render={() => <strong>Hello</strong>} />
//         <Route path="/contacts" component={Contacts} />
//         <Route path="/water" component={Water} />
//         <Route path="/sun" component={Sun} />
//         <Route path="/hot" component={Hot} />
//         <Route path="/could" component={Could} />
//         <Route path="/mountain" component={Mountain} />
//         <Route path="/earth" component={Earth} />
//         <Route path="/space" component={Space} />
//         <Route path="/" render={() => <h1>Page not found</h1>} />
//         {/* <Redirect to="/" /> */}
//       </Switch>

//       <Route path="/about/personal" render={() => <h1>Personal contacts</h1>} />
//       <Route path="/about/business" render={() => <h1>Business contacts</h1>} />

//     </div>
//   );
// }

// export default App;





import { Route, Switch } from 'react-router';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Posts from "./components/Posts/Posts";
import { NavLink } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink activeClassName="acive" to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/about" >About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/contacts" >Contacts</NavLink>
        </li>
        <li>
          <NavLink activeClassName="acive" to="/posts" >Posts</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/posts" component={Posts} />
        <Route path="/" render={() => <h1>Page not Found</h1>} />
        {/* <Redirect to="/" /> returns to the first page*/}
      </Switch>


      

    </div>
  );
}

export default App;