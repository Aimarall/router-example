// import classes from "./Contacts.module.css";


// const Contacts = ({ }) => {

//   return (
//     <div className={classes.Contacts}>
//       <h1>Contacts</h1>
//       <p>
//         Following that consultation, which concerned 217 NGOs (the list is contained in Annex I), the Secretariat also contacted directly those NGOs that appeared to have developed working relations on a limited or inadequate scale since their reclassification or admission between 1996 and 1998.
//         As called for in 32 C/Resolution 48, UNESCO has continued to participate in the Barbados+10 (B+10) review and Mauritius 2004 (M’04) forward-planning process, most recently by contributing to the consolidated report that the United Nations Secretary-General will submit to the Commission on Sustainable Development at its April 2004 session.
//         She has had only limited <strong> contact with them, </strong>and they have been subject to pressure making their work difficult. The author also alleges that ever since he was born and before he joined his father in Denmark, they maintained regular contact.[...] their involvement with the Committee, he suggested that witness protection measures could be introduced by United Nations [...]There was sometimes a just cause for limiting contact with a lawyer, for instance if the defendant was suspected of being [...]
//         <h2>Of the contacts</h2>
//         Following that consultation, which concerned 217 NGOs (the list is contained in Annex I), the Secretariat also contacted directly those NGOs that appeared to have developed working relations on a limited or inadequate scale since their reclassification or admission between 1996 and 1998.
//         As called for in 32 C/Resolution 48, UNESCO has continued to participate in the Barbados+10 (B+10) review and Mauritius 2004 (M’04) forward-planning process, most recently by contributing to the consolidated report that the United Nations Secretary-General will submit to the Commission on Sustainable Development at its April 2004 session.
//         She has had only limited contact with them, and they have been subject to pressure making their work difficult. The author also alleges that ever since he was born and before he joined his father in Denmark, they maintained regular contact.[...] their involvement with the Committee, he suggested that witness protection measures could be introduced by United Nations [...]There was sometimes a just cause for limiting contact with a lawyer, for instance if the defendant was suspected of being [...]
     
//      </p>

//     </div>
//   );
// }

// export default Contacts;





import { Link, Route, Switch } from "react-router-dom";



const Contacts = ({ }) => {

  return (
    <div>
      <Link to="/contacts/personal">Personal</Link>
      <Link to="/contacts/business">Business</Link>

      <Route path="/about/personal" render={() => <h1>Personal contacts</h1>} />
      <Route path="/about/business" render={() => <h1>Business contacts</h1>} />
    </div>
  );
}

export default Contacts;