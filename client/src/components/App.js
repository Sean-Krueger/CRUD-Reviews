import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import CryptoChatter from "../pages/CryptoChatter";
import NewChatter from "../pages/NewChatter";
import Dashboard from "../pages/Dashboard";
import Airposts from './Airposts/Airposts';
import Airpost from './Airpost/Airpost';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          {/* <Route path="/chatter">
            <CryptoChatter user={user} />
          </Route> */}

    {/* Posts */}
          <Route exact path="/" component={Airposts} />
          <Route exact path="/airposts/:slug" component={Airpost} />
{/* 
          <Route path="/newchatter">
            <NewChatter user={user} />
          </Route>
          <Route path="/dashboard">
            <Dashboard user={user} />
          </Route> */}
          {/* <Route path="/">
            <MainPage user ={user}/>
          </Route> */}
          {/* <Route path="/new">
            <NewChatter user={user} />
          </Route> */}
        </Switch>
      </main>
    </>
  );
}

export default App;
