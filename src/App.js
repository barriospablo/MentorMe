import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import MentorDetails from "./components/mentors/MentorDetails";
import SignIn from "./components/auth/SignIn";
import CreateMentor from "./components/mentors/CreateMentor";
import EditMentor from "./components/mentors/EditMentor";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignIn} />
          <Route exact path="/home" component={Dashboard} />
          <Route path="/mentor/:id" component={MentorDetails} />
          <Route path="/edit/:mentor" component={EditMentor} />
          <Route path="/create" component={CreateMentor} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
