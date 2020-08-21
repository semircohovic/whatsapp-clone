import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import { Button } from '@material-ui/core'


function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (


          <div className="app__body">
            <Router>
              <Sidebar />
              <Switch>

                <Route path="/rooms/:roomId">
                  {console.log("test")}
                  <Chat />
                </Route>

                <Route path="/">
                  {/* <Chat /> */}
                </Route>
              </Switch>
            </Router>
          </div>)}
    </div>
  );
}

export default App;
