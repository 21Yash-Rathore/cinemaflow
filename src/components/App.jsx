// This is going to be the main application, every single components has to be contain inside of this "App.jsx"

// rafce --> this is an shorthand method for create reactArrowFunction Export component.

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import { Actors, MovieInformation, Profile, Navbar, Movies } from "./";
import { Root, Main, Toolbar } from "./App.styles";

const App = () => {
  return (
    <Root>
      <CssBaseline />
      <Navbar />
      <Main>
        <Toolbar />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Main>
    </Root>
  );
};

export default App;
