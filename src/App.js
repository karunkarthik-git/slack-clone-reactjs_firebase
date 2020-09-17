import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome to slack</h1>
                  <ul>
                    <li>You can create channels</li>
                    <li>You can send messages to channels</li>
                    <li>You can find username and profilepicture as per your gmail account</li>
                    <li>Check out the general and youtube channels on bottom left</li>
                    <li>Many more updates coming soon..</li>
                  </ul>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
