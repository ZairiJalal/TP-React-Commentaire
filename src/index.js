// Import the react and the reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard'

// Create a react component
const App = () => {
return (
           <div className="ui container comments">
             <ApprovalCard >
               <div>
                 <h4>Attention !</h4>
                   Vous êtes sûr ?
               </div>
             </ApprovalCard>
             <ApprovalCard >
                 <Comment author="Jalal ZAIRI" date=" à 10h30" content="Bonjour tout le monde"/>
             </ApprovalCard>
             <ApprovalCard >
                 <Comment author="Dounia ZAIRI" date=" à 12h30" content="Bonjour "/>
             </ApprovalCard>
             <ApprovalCard >
                 <Comment author="Youssef ZAIRI" date=" à 17h30" content="Hi !"/>
             </ApprovalCard>
           </div>

);
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'))